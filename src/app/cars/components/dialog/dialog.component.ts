import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  onCloseConfirm(data) {
    
    this.dialogRef.close(data);
    
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  ngOnInit() {
  }


}
