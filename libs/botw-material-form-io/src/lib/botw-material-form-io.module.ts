import { NgModule } from '@angular/core';
import { BotwMaterialFormIoComponent } from './botw-material-form-io.component';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {MatButtonModule} from "@angular/material/button";
import {BotwMaterialGridComponent} from "./botw-material-grid/botw-material-grid.component";
import {BotwMaterialDatetimeComponent} from "./botw-material-datetime/botw-material-datetime.component";
import {BotwMaterialSelectComponent} from "./botw-material-select/botw-material-select.component";
import {BotwMaterialTextfieldComponent} from "./botw-material-textfield/botw-material-textfield.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BotwMaterialHtmlElementComponent} from "./botw-material-htmlelement/botw-material-html-element.component";
import {MatRadioModule} from "@angular/material/radio";
import {BotwMaterialRadioComponent} from "./botw-material-radio/botw-material-radio.component";
import {BotwMaterialCheckedComponent} from "./botw-material-checked/botw-material-checked.component";
import {MatDividerModule} from "@angular/material/divider";
import {BotwMaterialTextareaComponent} from "./botw-material-textarea/botw-material-textarea.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

export const DateFormats = {
  parse: {
    dateInput: ['YYYY-MM-DD']
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    BotwMaterialFormIoComponent,
    BotwMaterialGridComponent,
    BotwMaterialDatetimeComponent,
    BotwMaterialSelectComponent,
    BotwMaterialTextfieldComponent,
    BotwMaterialHtmlElementComponent,
    BotwMaterialRadioComponent,
    BotwMaterialCheckedComponent,
    BotwMaterialTextareaComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        MatDividerModule,
        MatIconModule,
        MatTooltipModule
    ],
  providers: [
    MatDatepickerModule,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats }
  ],
  exports: [BotwMaterialFormIoComponent]
})

export class BotwMaterialFormIoModule { }
