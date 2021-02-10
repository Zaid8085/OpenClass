import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-menu-card-dialog',
  templateUrl: './menu-card-dialog.component.html',
  styleUrls: ['./menu-card-dialog.component.scss']
})
export class MenuCardDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: MatDialog) { }

  ngOnInit() {
    console.log(this.data)
  }

}
