import {Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import * as jsonLogic from 'json-logic-js';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'botw-enterprise-mat-grid',
  templateUrl: 'botw-material-grid.component.html',
  styles: [
    `
      .eka-components-card {
        margin-bottom: 21px;
        padding: 0;
      }

      .invisible {
        display: block;
        visibility: hidden;
        height: 0;
        width: 0;
      }

      mat-form-field {
      }

      .eka-components-grid-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 5px 0;
        margin: 5px 0;
        // background: rgba(0, 0, 0, 0.04);
        // width: 700px;
        // justify-content: flex-end;
        flex-direction: column;
      }

      .eka-components-grid-inner-button {
        display: flex;
        justify-content: center;
      }

      .eka-remove-button {
        justify-content: flex-start;
      }

      .eka-populate-select {
        margin: 10px auto;
      }

      .mat-button-base {
        border-radius: 0;
      }
    `
  ]
})

export class BotwMaterialGridComponent implements OnInit {

  @ViewChild('add') addrSt1 :ElementRef;

  @Input() public component: FormIoModel;

  // addresses: ESBResults[];

  loadingAddress: boolean = false;
  noAddressMessage: string = 'No Results';

  constructor(public botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  validateCondition(json: any) {
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }

  validateGridCondition(condition: any, key: string, i: number) {
    if (condition === undefined || condition === null) {
      return true;
    }
    return jsonLogic.apply(jsonLogic.apply(condition,
      {
        row: this.botwMaterialFormIoService.partyData
          .get(this.component.refParty)
          .get(this.component._id)
          .controls[key]
          .value[i]
      }));
  }

  newGrid(form: FormIoModel) {
    let formGroup = new FormGroup({});
    form.components.forEach((component: FormIoModel) => {
      formGroup.addControl(component.key, new FormControl(''));
    });
    let grouper = this.botwMaterialFormIoService.partyData
      .get(this.component.refParty)
      .get(this.component._id)
      .controls[form.key];
    if (grouper instanceof FormArray) {
      grouper.push(formGroup);
      this.addValidations(form, grouper.length - 1)
    }
  }

  dateChange($event: MatDatepickerInputEvent<any>, componentKey: string, subComponentKey: string, index: number) {
    let dateMainController = this.botwMaterialFormIoService.partyData
      .get(this.component.refParty)
      .get(this.component._id)
      .controls[componentKey];
    if (dateMainController instanceof FormArray) {
      let gridComponent = dateMainController.controls[index];
      if (gridComponent instanceof FormGroup) {
        gridComponent.controls[subComponentKey].patchValue(new Date($event.target.value).toISOString())
      }
    }
  }

  removeEntry(form: FormIoModel, index: number) {
    let mainComponent = this.botwMaterialFormIoService.partyData
      .get(this.component.refParty)
      .get(this.component._id).controls[form.key];
    if (mainComponent instanceof FormArray) {
      mainComponent.removeAt(index);
    }
  }

  getControls(controller: any) {
    return (controller as FormArray).controls;
  }

  // getAddress(input: any) {
  //   if (input.target.value && input.target.value.length >= 3) {
  //     this.loadingAddress = true;
  //     return this.botwMaterialAddressService.getAddress(input.target.value).subscribe(
  //       (response: HttpResponse<any>) => {
  //         if (response.ok) {
  //           try {
  //             const resp: Response = Response.deserializeBinary(response.body);
  //             this.loadingAddress = false;
  //             if (resp.hasGoogleAddressResponse()) {
  //               this.addresses = resp.getGoogleAddressResponse().getResultsList()
  //             } else {
  //               this.noAddressMessage = resp.getMessage();
  //               this.addresses = [];
  //             }
  //           } catch (e) {
  //             this.loadingAddress = false;
  //             this.addresses = [];
  //           }
  //         } else {
  //           this.loadingAddress = false;
  //           this.addresses = [];
  //         }
  //       }
  //     );
  //   } else {
  //     this.loadingAddress = false;
  //     this.addresses = [];
  //   }
  // }
  //
  // distributeAddress(eSBResults: ESBResults, subComponent: FormIoModel, index: number) {
  //   let grouper = this.botwMaterialFormIoService.partyData
  //     .get(this.component.refParty)
  //     .get(this.component._id)
  //     .controls[this.component.key];
  //   if (subComponent && subComponent.address) {
  //     eSBResults.getAddressComponentsList().forEach((address: AddressComponents) => {
  //       if (address.getTypesList().includes('apartment')) {
  //         subComponent.address.st2.forEach((key: string) => {
  //           if (grouper instanceof FormArray) {
  //             let group = grouper.controls[index];
  //             if (group instanceof FormGroup) {
  //               group.controls[key].setValue(address.getLongName())
  //             }
  //           }
  //         })
  //       }
  //       if (address.getTypesList().includes('neighborhood')) {
  //         subComponent.address.st2.forEach((key: string) => {
  //           if (grouper instanceof FormArray) {
  //             let group = grouper.controls[index];
  //             if (group instanceof FormGroup) {
  //               group.controls[key].setValue(address.getLongName())
  //             }
  //           }
  //         })
  //       }
  //       if (address.getTypesList().includes('locality')) {
  //         subComponent.address.city.forEach((key: string) => {
  //           if (grouper instanceof FormArray) {
  //             let group = grouper.controls[index];
  //             if (group instanceof FormGroup) {
  //               group.controls[key].setValue(address.getLongName())
  //             }
  //           }
  //         })
  //       }
  //       if (address.getTypesList().includes('administrative_area_level_1')) {
  //         subComponent.address.state.forEach((key: string) => {
  //           if (grouper instanceof FormArray) {
  //             let group = grouper.controls[index];
  //             if (group instanceof FormGroup) {
  //               group.controls[key].setValue(address.getShortName())
  //             }
  //           }
  //         })
  //       }
  //       if (address.getTypesList().includes('country')) {
  //         subComponent.address.country.forEach((key: string) => {
  //           if (grouper instanceof FormArray) {
  //             let group = grouper.controls[index];
  //             if (group instanceof FormGroup) {
  //               group.controls[key].setValue(address.getShortName())
  //             }
  //           }
  //         })
  //       }
  //       if (address.getTypesList().includes('postal_code')) {
  //         subComponent.address.postal.forEach((key: string) => {
  //           if (grouper instanceof FormArray) {
  //             let group = grouper.controls[index];
  //             if (group instanceof FormGroup) {
  //               group.controls[key].setValue(address.getLongName())
  //             }
  //           }
  //         })
  //       }
  //     })
  //   }
  // }
  //
  // getStreetAddress1(address: ESBResults) {
  //   if (address) {
  //     return this.botwMaterialAddressService.getStreetAddress1(address)
  //   }
  // }

  newCopyGrid(component: FormIoModel, index: number) {
    let grouper = this.botwMaterialFormIoService.partyData
      .get(this.component.refParty)
      .get(this.component._id)
      .controls[component.key];
    if (grouper instanceof FormArray) {
      let group = grouper.controls[index];
      if (group instanceof FormGroup) {
        grouper.push(group);
      }
    }
  }

  ngOnInit(): void {
    if (this.component.type === 'datagrid') {
      if (this.component.controller instanceof FormArray) {
        for (let i = 0; i < this.component.controller.length; i++ ) {
          this.addValidations(this.component, i);
        }
      }
    }
  }

  onSelection(component: FormIoModel, i: number, e: MatCheckboxChange) {
    let grouper = this.botwMaterialFormIoService.partyData
      .get(this.component.refParty)
      .get(this.component._id)
      .controls[component.key];
    if (grouper instanceof FormArray) {
      if (e.checked) {
        let group = grouper.controls[i - 1];
        if (group instanceof FormGroup) {
          grouper.controls[i].patchValue(group.getRawValue());
        }
      } else {
        grouper.controls[i].reset();
      }
    }
  }

  addValidations(formIoModel: FormIoModel, array: number) {
    if (formIoModel.components) {
      formIoModel.components.forEach((component: FormIoModel) => {
        this.addValidations(component, array);
      })
    }
    if (formIoModel.validate && formIoModel.type !== 'datagrid') {
      let validators = [];
      if (formIoModel.validate.required) {
        validators.push(Validators.required);
      }
      if (formIoModel.validate.pattern) {
        validators.push(Validators.pattern(formIoModel.validate.pattern));
      }

      if (this.component.controller instanceof FormArray) {
        const formGroup = this.component.controller.controls[array];
        if (formGroup instanceof FormGroup) {
          formGroup.controls[formIoModel.key].setValidators(validators)
        }
      }
    }
  }
}
