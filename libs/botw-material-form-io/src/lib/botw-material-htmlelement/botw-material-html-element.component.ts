import {Component, Input, OnInit} from '@angular/core';
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";

@Component({
  selector: 'botw-enterprise-mat-html-element',
  templateUrl: 'botw-material-html-element.component.html',
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

export class BotwMaterialHtmlElementComponent implements OnInit {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  ngOnInit(): void {
  }

  validateCondition(json: any) {
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }

}
