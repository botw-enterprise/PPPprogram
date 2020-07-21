import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'botw-ppp-warning',
    templateUrl: 'warning.component.html',
    styleUrls: [
        'warning.component.scss'
    ]
})

export class WarningComponent {


  constructor(public dialogRef: MatDialogRef<WarningComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  close() {
      this.dialogRef.close(true);
  }

}
