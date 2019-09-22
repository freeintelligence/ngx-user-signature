import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

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
    private dialogRef: MatDialogRef<CompleteSignatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.signaturePad.clear();
    this.size();
  }

  size() {
    const rest = this.titleContainer.nativeElement.offsetHeight + this.actionsContainer.nativeElement.offsetHeight;

    this.signaturePad.set('canvasWidth', this.signatureContainer.nativeElement.offsetWidth);
    this.signaturePad.set('canvasHeight', this.generalContainer.nativeElement.offsetHeight - rest - 4);
  }

  upload() {

  }

  save() {

  }

  close() {
    this.dialogRef.close();
  }

  drawComplete() {
  }

  drawStart() {
  }

}
