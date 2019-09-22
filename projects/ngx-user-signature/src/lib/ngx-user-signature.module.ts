import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { CompleteSignatureComponent } from './dialogs/complete-signature/complete-signature.component';

@NgModule({
  declarations: [CompleteSignatureComponent],
  entryComponents: [CompleteSignatureComponent],
  imports: [
    MatDialogModule
  ],
  exports: []
})
export class NgxUserSignatureModule { }
