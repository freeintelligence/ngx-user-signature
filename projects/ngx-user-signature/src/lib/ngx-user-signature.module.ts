import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule, MatIconModule, } from '@angular/material';
import { SignaturePadModule } from 'angular2-signaturepad';
import { CompleteSignatureComponent } from './dialogs/complete-signature/complete-signature.component';

@NgModule({
  declarations: [CompleteSignatureComponent],
  entryComponents: [CompleteSignatureComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,

    SignaturePadModule,
  ],
  exports: []
})
export class NgxUserSignatureModule { }
