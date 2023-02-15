import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent} from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Board } from './game/board';
import { Cell } from './game/cell';
import { DialogEndGameComponent } from './components/dialog-end-game/dialog-end-game.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,MatDialogModule],
      declarations: [AppComponent,DialogEndGameComponent]
    }).compileComponents();
});

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should mineCount number 10 ', () => {
    const board = new Board( 10, 10);
    const resp = board.getRemainingMines();
    expect(resp).toBe(10);
  });

  it('Should proximityMinas', () => {
    const cell = new Cell( 10, 10);
    const resp = cell.proximityMines;
    expect(resp).toBe(0);
  });

  it('Should Mine false', () => {
    const cell = new Cell( 10, 10);
    const resp = cell.mine;
    expect(resp).toBeFalsy();
  });

  it('Should status data true', () => {
    const cell = new Cell( 10, 10);
    const resp = cell.status;
    expect(resp).toBeTruthy();

  });

  it('Should status data random true', () => {
    const board = new Board( 10, 10);
    const resp = board.getRandomCell;
    expect(resp).toBeTruthy();

  });

  it(`Should have as title 'Busca Minas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Busca Minas');
  });
});


