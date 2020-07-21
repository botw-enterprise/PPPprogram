import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovidFormComponent} from "./covid-care-act/covid-form/covid-form.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CovidCareActComponent} from "./covid-care-act/covid-care-act.component";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {UploadComponent} from "./upload/upload.component";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {UploadDialogComponent} from "./upload/upload-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {CommonModule} from "@angular/common";
import {UploadHandlerComponent} from "./upload/upload-handler.component";
import {MatChipsModule} from "@angular/material/chips";
import {BotwMaterialFormIoModule} from "@nr-ppp/botw-material-form-io";
import {WarningComponent} from "./warning.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
    declarations: [
        AppComponent,
        CovidFormComponent,
        CovidCareActComponent,
        UploadComponent,
        UploadDialogComponent,
        UploadHandlerComponent,
      WarningComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    BotwMaterialFormIoModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatStepperModule,
    MatChipsModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
