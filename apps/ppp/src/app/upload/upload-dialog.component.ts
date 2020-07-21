import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Doc, STATUS} from "./upload.component";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'ppp-doc-upload-model',
  templateUrl: 'upload-dialog.component.html',
  styleUrls: [
    'upload-dialog.component.scss'
  ]
})

export class UploadDialogComponent {

  docNameController = new FormControl("", Validators.required);

  docCommentController = new FormControl("");

  constructor(public dialogRef: MatDialogRef<UploadDialogComponent>, @Inject(MAT_DIALOG_DATA) public document: Doc) {
    this.docNameController.setValue(this.document.name);
    this.docCommentController.setValue(this.document.description);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    if (this.docNameController.valid && this.docCommentController.valid) {
      this.document.processStatus = STATUS.INITIATED;
      this.document.name = this.docNameController.value;
      this.document.description = this.docCommentController.value;
      this.dialogRef.close();
    }
  }
}
