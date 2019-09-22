import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule, MatIconModule, } from '@angular/material';
import { CompleteSignatureComponent } from './dialogs/complete-signature/complete-signature.component';

@NgModule({
  declarations: [CompleteSignatureComponent],
  entryComponents: [CompleteSignatureComponent],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: []
})
export class NgxUserSignatureModule { }
