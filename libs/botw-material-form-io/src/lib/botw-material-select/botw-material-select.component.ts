import {Component, Input} from '@angular/core';
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";

@Component({
  selector: 'botw-enterprise-mat-select',
  templateUrl: 'botw-material-select.component.html',
  styles: [
    `
      mat-form-field {
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

export class BotwMaterialSelectComponent {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  validateCondition(json: any) {
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }
}
