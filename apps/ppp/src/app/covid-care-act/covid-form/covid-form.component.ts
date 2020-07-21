import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {covidForm} from "./covid-form";
import {FormIoModel} from "../../../../../../libs/botw-material-form-io/src/lib/formio.model";
import {BotwMaterialFormIoService} from "../../../../../../libs/botw-material-form-io/src/lib/botw-material-form-io.service";

@Component({
  selector: 'botw-ppp-form',
  templateUrl: 'covid-form.component.html',
  styleUrls: [
    'covid-form.component.scss'
  ]
})

export class CovidFormComponent implements OnInit {

  @Input() partyId: string;

  @Output() emitter = new EventEmitter<boolean>();

  covidCare = '5e86262c516e11367afc0771';

  formIoModel: FormIoModel = covidForm;

  formReady = false;

  renderedFormModel: FormIoModel = null;

  constructor(private botwMaterialFormIoService: BotwMaterialFormIoService) {
  }

  ngOnInit(): void {
    this.botwMaterialFormIoService.registerForm(this.formIoModel);
    this.renderedFormModel = this.botwMaterialFormIoService.readyUpForm(this.covidCare, this.partyId);

    this.botwMaterialFormIoService.partyData.get(this.partyId).get(this.covidCare)
      .valueChanges.subscribe(() => {
        this.emitter.emit(this.botwMaterialFormIoService.partyData.get(this.partyId).get(this.covidCare).valid)
    });
    this.formReady = true;
  }

}
