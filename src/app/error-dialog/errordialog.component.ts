import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './errordialog.component.html'
})

export class ErrorDialogComponent {
  title = 'Angular-Interceptor';
  
  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    //console.log(data);
  }
}