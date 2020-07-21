import {Component, Input, OnInit} from '@angular/core';
import {FormIoModel} from "./formio.model";
import {BotwMaterialFormIoService} from "./botw-material-form-io.service";

@Component({
  selector: 'botw-enterprise-material-form-io',
  templateUrl: 'botw-material-form-io.component.html',
  styleUrls: [
    'botw-material-form-io.component.scss'
  ]
})
export class BotwMaterialFormIoComponent implements OnInit {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) { }

  ngOnInit() {
  }

  validateCondition(json: any) {
    if (json === undefined || json === null) {
      return true;
    }
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }
}
