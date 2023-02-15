import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-end-game',
  templateUrl: './dialog-end-game.component.html',
  styleUrls: ['./dialog-end-game.component.scss']
})
export class DialogEndGameComponent implements OnInit {

  status!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEndGameComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public myData: any
  ) {
  }

  ngOnInit(): void {
    this.status = 'closed';
  }

  closeDialog() {
    this.dialogRef.close({event: 'close', data: this.status});
  }
}
