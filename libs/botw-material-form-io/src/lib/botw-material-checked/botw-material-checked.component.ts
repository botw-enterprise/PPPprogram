import {Component, Input, OnInit} from '@angular/core';
import {FormIoModel} from "../formio.model";
import {BotwMaterialFormIoService} from "../botw-material-form-io.service";

@Component({
  selector: 'botw-enterprise-mat-checked',
  templateUrl: 'botw-material-checked.component.html',
  styleUrls: [
    'botw-material-checked.component.scss'
  ]
})

export class BotwMaterialCheckedComponent implements OnInit {

  @Input() public component: FormIoModel;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {}

  ngOnInit(): void { }

  validateCondition(json: any) {
    return this.botwMaterialFormIoService.validateCondition(json, this.component._id, this.component.refParty);
  }
}
