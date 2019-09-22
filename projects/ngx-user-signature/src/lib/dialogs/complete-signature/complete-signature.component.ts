import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'lib-complete-signature',
  templateUrl: './complete-signature.component.html',
  styleUrls: ['./complete-signature.component.css']
})
export class CompleteSignatureComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CompleteSignatureComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
