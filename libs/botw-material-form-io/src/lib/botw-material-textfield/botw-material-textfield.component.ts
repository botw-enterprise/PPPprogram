import {Component, Input, OnInit} from '@angular/core';
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'botw-enterprise-mat-textfield',
  templateUrl: 'botw-material-textfield.component.html',
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

export class BotwMaterialTextfieldComponent implements OnInit {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  ngOnInit(): void {
    // if (this.component.validate) {
    //   if (this.component.validate.maxLength) {
    //     this.component.controller.setValidators(Validators.maxLength(this.component.validate.maxLength));
    //   }
    //   if (this.component.validate.minLength) {
    //     this.component.controller.setValidators(Validators.minLength(this.component.validate.minLength))
    //   }
    // }

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
    return this.botwMaterialFormIoService
      .validateCondition(json, this.component._id, this.component.refParty);
  }

  updateNumber(number: any) {
    if (this.component.validate) {
      if (this.component.validate.json) {
        // const valid = this.botwMaterialFormIoService.validateCondition(this.component.validate.json, this.component._id, this.component.refParty);
        // if (!valid) {
        //   this.component.controller.errors.setErrors({'customError': 'true'});
        // } else {
        //   this.component.controller.errors.setErrors(null);
        // }
      }
    }

    if (this.component.prefix === '+1') {
      if (number.inputType !== 'deleteContentBackward') {
        const desired = number.target.value.replace(/[^a-zA-Z0-9 ]/g, "")
          .replace(/ /, '').replace(/-/,'');
        if (desired.length === 6) {
          this.component.controller
            .setValue( '(' + desired.substr(0, 3) + ') ' + desired.substr(3, 3) + '-');
        } else if (desired.length === 3) {
          this.component.controller.setValue('(' + desired.substr(0, 3) + ') ');
        } else if (desired.length > 10) {
          this.component.controller
            .setValue( '(' + desired.substr(0, 3) + ') ' +
              desired.substr(3, 3) + '-' + desired.substr(6, 4));
        }
      }
    }
    if (this.component.prefix === '$') {
      const regex = new RegExp(this.component.conditional.pattern, 'g');
      this.component.controller
        .setValue(number.target.value.replace(/,/g, '')
          .replace(/[a-zA-Z]/g, '')
          .replace( regex, "$1," ));
    }
  }

  appendSuffix(suffix: string) {
    // this.component.controller
    //   .setValue(this.component.controller.value + suffix);
  }
}
