import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Board} from './game/board';
import {Cell} from './game/cell';
import {MatDialog} from '@angular/material/dialog';
import {DialogEndGameComponent} from './components/dialog-end-game/dialog-end-game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Busca Minas';
  board: Board;
  remainingMines: number;
  cellStyle: string;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  constructor(public dialog: MatDialog) {
    this.reset();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      const message = 'Lo sentimos, vuelve a intentar =(';
      this.openTempDialog(message);
    } else if (result === 'win') {
      const message = 'Felicitaciones!!!';
      this.openTempDialog(message);
    }
  }

  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
      this.remainingMines++;
    } else {
      if (this.remainingMines > 0) {
        cell.status = 'flag';
        this.remainingMines--;
      }
    }
  }

  reset() {
    this.board = new Board(10, 10);
    this.remainingMines = this.board.getRemainingMines();
  }

  openTempDialog(message) {
    const myTempDialog = this.dialog.open(DialogEndGameComponent,
      {
        data: message,
        panelClass: 'fullscreen-dialog',
      });
    myTempDialog.afterClosed().subscribe((res) => {
      if (res.data === 'closed') {
        this.reset();
      }
    });
  }
}
