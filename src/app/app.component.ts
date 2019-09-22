import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CompleteSignatureComponent } from 'ngx-user-signature';

@Component({
  selector: 'user-signature-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {
    this.open();
  }

  open() {
    this.dialog.open(CompleteSignatureComponent, {
      width: '512px',
      data: {

      }
    })
    .afterClosed().subscribe(data => {
      console.log('Closed data', data);
    });
  }

}
