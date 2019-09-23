import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

export interface ButtonInterface {
  text: string;
  icon?: string;
  color?: string;
  handle: (dialog: CompleteSignatureComponent, image: string) => void;
}
export interface DataInterface {
  title?: string;
  image: string;
  buttons: ButtonInterface[];
  disableClose?: boolean;
}

@Component({
  selector: 'lib-complete-signature',
  templateUrl: './complete-signature.component.html',
  styleUrls: ['./complete-signature.component.css'],
})
export class CompleteSignatureComponent implements OnInit, AfterViewInit {

  @ViewChild(SignaturePad, { static: true }) signaturePad: SignaturePad;
  @ViewChild('generalContainer', { static: true }) generalContainer: ElementRef;
  @ViewChild('signatureContainer', { static: true }) signatureContainer: ElementRef;
  @ViewChild('titleContainer', { static: true }) titleContainer: ElementRef;
  @ViewChild('actionsContainer', { static: true }) actionsContainer: ElementRef;

  signaturePadOptions: object = {
    minWidth: 2,
  };

  constructor(
    public dialogRef: MatDialogRef<CompleteSignatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataInterface) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.signaturePad.clear();

    this.size();

    if (typeof this.data.image === 'string') {
      this.signaturePad.fromDataURL(this.data.image);
    }
  }

  size() {
    const rest = this.titleContainer.nativeElement.offsetHeight + this.actionsContainer.nativeElement.offsetHeight;

    this.signaturePad.set('canvasWidth', this.signatureContainer.nativeElement.offsetWidth);
    this.signaturePad.set('canvasHeight', this.generalContainer.nativeElement.offsetHeight - rest - 4);
  }

  imageToSignature(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.signaturePad.clear();
        this.signaturePad.fromDataURL(reader.result.toString());
      };
      reader.readAsDataURL(file);
    }
  }

  handle(button: ButtonInterface) {
    return button.handle(this, this.signaturePad.toDataURL('image/png'));
  }

  close() {
    this.dialogRef.close();
  }

}
