import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import * as uuid from 'uuid';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Doc} from "../upload/upload.component";
import {MatStepper} from "@angular/material/stepper";
import {BotwMaterialFormIoService} from "../../../../../libs/botw-material-form-io/src/lib/botw-material-form-io.service";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'botw-ppp-support',
  templateUrl: 'covid-care-act.component.html',
  styleUrls: [
    'covid-care-act.component.scss'
  ]
})

export class CovidCareActComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  @Output() canClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  showUpload = false;

  uuid: string;
  covidCare = '5e86262c516e11367afc0771';
  complete = false;
  valid = false;
  hasError = false;
  error: HttpErrorResponse;
  ready = false;
  step = 2;
  documents: Array<Doc> = new Array<Doc>();
  done = false;
  showToggle: any = false;
  businessName = '';

  constructor(private _formBuilder: FormBuilder,
              private botwMaterialFormIoService: BotwMaterialFormIoService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(window.location.href + 'api/profile', {observe: "response"})
      .subscribe((res: HttpResponse<string[]>) => {
      if (res.ok) {
        if (res.body.find((s: string) => s === 'toggle-upload')) {
         this.showToggle = true;
        }
        if (res.body.find((s: string) => s === 'show-upload')) {
          this.showUpload = true;
        }
      }
    });
    this.uuid = uuid.v4();
    this.canClose.emit(false);
  }

  submitRequest() {
    this.businessName = this.botwMaterialFormIoService.partyData.get(this.uuid).get(this.covidCare).controls['qid3'].value;
    const final = this.botwMaterialFormIoService.partyData.get(this.uuid).get(this.covidCare).getRawValue();
    final.applicationId = this.businessName + '' + new Date().toISOString();
    const careAct: any = {
      referenceId: this.uuid,
      emailId: this.botwMaterialFormIoService.partyData.get(this.uuid).get(this.covidCare).controls['qid13'].value,
      name: this.businessName,
      dataModel: {
        data: final,
        fileList: this.documents
      }
    };
    this.httpClient.post(window.location.href + 'api/processApplication',
      careAct, {observe: "response"})
      .subscribe((res) => {
        this.complete = true;
        this.stepper.next();
        this.canClose.emit(true);
      }, (err: HttpErrorResponse) => {
        this.error = err;
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 5000);
        console.log('Failed to Complete request.')
      });
  }

  generateId(): string {
    return this.uuid;
  }

  reset() {
    this.botwMaterialFormIoService.partyData.get(this.uuid).get(this.covidCare).reset();
  }

  close() {
    window.close();
  }

  processEvent(event: boolean) {
    this.ready = event;
  }

  next() {
    this.step++;
  }

  back() {
    this.step--;
  }

  toggleChange(event: MatSlideToggleChange) {
    this.showUpload = event.checked;
  }
}
