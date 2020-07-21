import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WarningComponent} from "./warning.component";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'botw-ppp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  canClose: boolean;

  constructor(private matDialog: MatDialog, private router: Router) {}

  processEvent(event: boolean) {
    this.canClose = event;
  }


  goToHome() {
    if (this.canClose) {
      this.closeAndRedirect();
    } else {
      const dialog = this.matDialog.open(WarningComponent, {});
      dialog.afterClosed().subscribe((res: boolean) => {
        if (res) {
          this.closeAndRedirect();
        }
      })
    }
  }

  closeAndRedirect() {
    window.open('https://www.google.com', '_self');
    // this.router.navigateByUrl('https://www.google.com').then(() => {
    //   console.log('Completed redirecting..')
    // }).catch(() => console.log('COud not redirect'));
  }
}
