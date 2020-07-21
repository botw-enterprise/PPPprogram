import {Component, Input} from "@angular/core";
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'botw-enterprise-mat-datetime',
  templateUrl: 'botw-material-datetime.component.html',
  styles: [
    `
      mat-form-field {
        min-width: 700px;
      }

      .invisible {
        display: block;
        visibility: hidden;
        height: 0;
        width: 0;
      }

    `
  ]
})

export class BotwMaterialDatetimeComponent {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  validateCondition(json: any) {
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }

  dateChange($event: MatDatepickerInputEvent<any>, key: string) {
    this.botwMaterialFormIoService.partyData
      .get(this.component.refParty)
      .get(this.component._id)
      .controls[key].patchValue(new Date($event.target.value).toISOString());
  }

}
