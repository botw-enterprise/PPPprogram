import {Component, Input, OnInit} from '@angular/core';
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'botw-enterprise-mat-textarea',
  templateUrl: 'botw-material-textarea.component.html',
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

export class BotwMaterialTextareaComponent implements OnInit {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  ngOnInit(): void {
    if (this.component.validate) {
      let validators = [];
      if (this.component.validate.pattern) {
        validators.push(Validators.pattern(this.component.validate.pattern));
      }
      if (this.component.validate.required) {
        validators.push(Validators.required);
      }
      this.component.controller.setValidators(validators);
    }
  }

  validateCondition(json: any) {
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }

  onLeave($event: any) {

  }
}
