import {Injectable} from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {FormIoModel} from "./formio.model";
import * as jsonLogic from 'json-logic-js';
import * as lodash from 'lodash';

@Injectable({
  providedIn: "root"
})

export class BotwMaterialFormIoService {

  partyData: Map<string, Map<string, FormGroup>> = new Map<string, Map<string, FormGroup>>();

  partyRefDataForm: Map<string, Map<string, FormIoModel>> = new Map<string, Map<string, FormIoModel>>();

  formsRegistered: any = {};

  options: any = {};

  formsAreReady = false;

  loadedCdnFromCache = false;

  allCDNUrls: Map<string, Map<string, any[] | any>> = new Map<string, Map<string, any[] | any>>();

  constructor( private formBuilder: FormBuilder) {
    if (localStorage.getItem('eka-cdn')) {
      const cdn: Map<string, any> = new Map(JSON.parse(localStorage.getItem('eka-cdn')));
      cdn.forEach((value, key, map) => {
        const values: Map<string, any[]> = new Map<string, any[]>(map.get(key));
        this.allCDNUrls.set(key, values);
      });
      this.loadedCdnFromCache = true;
    }
  }

  createNewController(form: FormIoModel, data: any) {
    if (form.type === 'datagrid') {
      data.addControl(form.key, this.formBuilder.array([new FormGroup({})]));
    } else {
      data.addControl(form.key, new FormControl(''));
    }
    data.controls[form.key].valueChanges.subscribe(() => {
    });
    this.dataValidationAndOther(form, data);
  }

  dataValidationAndOther(form: FormIoModel, data: any) {
    form.controller = <FormControl | FormArray>data.controls[form.key];
    if (form.defaultValue) {
      data.controls[form.key].setValue(form.defaultValue);
    } else if (form.type === 'datetime') {
      data.controls[form.key].setValue((new Date()).toISOString());
      if (form.tags.includes('futureDate=no')) {
        form.dateFilter = (d: Date | null): boolean => {
          const day = (d || new Date());
          return day <= new Date();
        }
      } else if (form.tags.includes('pastDate=no')) {
        form.customError = 'Past dates are not allowed';
        form.dateFilter = (d: Date | null): boolean => {
          const day = (d || new Date());
          return day >= new Date();
        }
      }
    }

    if (form.validate && form.validate.required) {
      if (!form.conditional.json) {
        data.controls[form.key].setValidators(Validators.required);
      }
    }
  }

  async getOptionsForUrls(_id: string) {
    // if (!this.loadedCdnFromCache) {
    //   for (const url of this.allCDNUrls.get(_id).keys()) {
    //     const urlResponse = await this.ekaService.getData(url);
    //     this.allCDNUrls.get(_id).set(url, urlResponse);
    //   }
    //   localStorage.setItem('eka-cdn', JSON.stringify(this.allCDNUrls,
    //     (key, value) => (value instanceof Map ? [...value] : value)));
    // }
  }

  async populateOptionsForAllUrls(form: FormIoModel, _id) {
    form.urlData = form.data.values;
  }

  gatherData(form: FormIoModel, _id: string) {
    if (!this.allCDNUrls.get(_id).has(form.data.url)) {
      this.allCDNUrls.get(_id).set(form.data.url, []);
    }
  }

  getDisplayLabel(form: FormIoModel) {
    const beginningOfTemplate = form.template.lastIndexOf('{{');
    const endOfTemplate = form.template.lastIndexOf('}}');
    const slice = form.template.slice(beginningOfTemplate + 2, endOfTemplate);
    form.labelProperty = slice.replace('item.', '').trim();
  }

  prepareForm(form: FormIoModel, dataGrid: boolean, gridKey: string, partyId: string,
              createController: boolean, _id: string) {
    if (form && form.components) {
      form.components.forEach((component: FormIoModel) => {
        if (createController) {
          form._id = _id;
          form.refParty = partyId;
        }
        if (form.type === 'datagrid') {
          dataGrid = true;
          gridKey = form.key;
          if (createController) {
            this.createNewController(form, this.partyData.get(partyId).get(_id));
          }
          form.components.forEach((component: FormIoModel) => {
            this.prepareForm(component, dataGrid, gridKey, partyId, createController, _id);
          });
          dataGrid = false;
        } else {
          this.prepareForm(component, dataGrid, gridKey, partyId, createController, _id);
        }
      })
    } else {
      if (createController) {
        form._id = _id;
        form.refParty = partyId;
        if (dataGrid) {
          this.addToGroupController(form, gridKey, partyId, _id);
        } else {
          this.createNewController(form, this.partyData.get(partyId).get(_id));
        }
        if (form.type === 'select') {
          this.populateOptionsForAllUrls(form, _id);
        }
      } else {
        if (form.type === 'select') {
          this.getDisplayLabel(form);
          this.gatherData(form, _id);
        }
      }
    }
  }

  registerForm(form: FormIoModel) {
    this.formsAreReady = false;
    if (form._id) {
      this.formsRegistered[form._id] = form;
      if (!this.allCDNUrls.has(form._id) || this.updateCache()) {
        // console.info('Reinitializing cache..');
        this.loadedCdnFromCache = false;
        this.allCDNUrls.set(form._id, new Map<string, any[]>());
        this.allCDNUrls.set('tracker', new Map<string, any[]>());
        this.allCDNUrls.get('tracker').set('createdOn', new Date().toLocaleDateString());
        const day = new Date();
        const nextDate = new Date(day);
        nextDate.setDate(day.getDate() + 1);
        this.allCDNUrls.get('tracker').set('validity', nextDate.toLocaleDateString());
      }
      this.prepareForm(this.formsRegistered[form._id], false, null, null,
        false, form._id);
      this.getOptionsForUrls(form._id).then(() => {
        this.formsAreReady = true;
      })
    } else {
      throw new Error('Form must have an ID to register');
    }
  }

  updateCache(): boolean {
    if (!this.allCDNUrls.has('tracker')) {
      return true;
    } else if (!this.allCDNUrls.get('tracker').has('validity')) {
      return true;
    } else if (this.allCDNUrls.get('tracker').get('validity')) {
      return Date.parse(this.allCDNUrls.get('tracker').get('validity')) < Date.parse(new Date().toLocaleDateString());
    } else {
      return true;
    }
  }

  readyUpForm(_id: string, partyId: string) {
    const clonedForm: FormIoModel = lodash.cloneDeep(this.formsRegistered[_id]);
    const dataForFormId = new Map<string, FormGroup>();
    const formRefData = new Map<string, FormIoModel>();
    dataForFormId.set(_id, new FormGroup({}));
    formRefData.set(_id, clonedForm);
    this.partyData.set(partyId, dataForFormId);
    this.partyRefDataForm.set(partyId, formRefData);
    this.prepareForm(this.partyRefDataForm.get(partyId).get(_id), false, null, partyId,
      true, _id);
    return this.partyRefDataForm.get(partyId).get(_id);
  }

  private addToGroupController(form: FormIoModel, gridKey: string, partyId: string, _id: string) {
    const gridArray = this.partyData.get(partyId).get(_id).controls[gridKey];
    if (gridArray instanceof FormArray) {
      const gridGroup = gridArray.controls[0];
      if (gridGroup instanceof FormGroup) {
        gridGroup.addControl(form.key, new FormControl(''));
      }
    }
  }

  validateCondition(condition: any, _id?: string, refParty?: string) {
    if (condition === undefined || condition === null) {
      return true;
    }
    const partyData = this.partyData.get(refParty).get(_id).getRawValue();
    return jsonLogic.apply(jsonLogic.apply(condition, { data: partyData}));
  }

  patchForm(party: string, formId: string, data: any) {
    if (data && party && formId) {
      Object.keys(data).forEach((value: string) => {
        if (data[value] instanceof Array) {
          const gridArray = this.partyData.get(party).get(formId).controls[value];
          if (data[value].length <= 1) {
            console.log('Exiting due to limited results')
          } else {
            if (gridArray instanceof FormArray) {
              const gridGroup = gridArray.controls[0];
              if (gridGroup instanceof FormGroup) {
                const formGroup: FormGroup = new FormGroup({});
                Object.keys(gridGroup.getRawValue()).forEach((key: string) => {
                  formGroup.addControl(key, new FormControl(''))
                });
                gridArray.push(formGroup);
              }
            }
          }
        }
      });
      this.partyData.get(party)
          .get(formId)
          .patchValue(data);
    }
  }

  updatePartyRefDataId(partyId: string) {
    if (this.partyRefDataForm.has(partyId)) {
      this.partyRefDataForm.get(partyId).forEach((formIoModel: FormIoModel) => {
          this.recursiveUpdater(formIoModel, partyId);
      })
    }
  }

  recursiveUpdater(formIoModel: FormIoModel, partyId: string) {
    if (formIoModel.components) {
      formIoModel.components.forEach((component: FormIoModel) => {
        this.recursiveUpdater(component, partyId);
      })
    }
    if (formIoModel.refParty) {
      formIoModel.refParty = partyId;
    }
  }
}
