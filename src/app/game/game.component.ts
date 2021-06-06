import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { ButtonsService } from '../buttonsPanel/buttons.service';
import { Game } from './game';
import { GameService } from './game.service';
import { GameCellRenderer } from './gameCellRenderer.component';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  columnDefs: any;
  rowData: any;
  frameworkComponents: any;

  game : Game = new Game();
  messages: any[] = [];

  forward = false;

  gridOptions = {
    rowHeight: 20,
    defaultColDef: {
      width: 20,
      minWidth:20,
      maxWidth:20,
      autoHeight: true,
      cellStyle: {border: 'solid', borderTopWidth: '0.5px', borderRightWidth: '0.5px', borderLeftWidth: '0.5px', borderBottomWidth: '0.5px'},
      cellRenderer: 'gameCellRenderer',
      cellClass: (params:any) => {
        return params.value === 1 ? 'alive' : 'dead';
    }
  }
};


  constructor() {
/*     this.subscription = this.buttonsService.playEvent().subscribe(() => {
      this.onPlay();
    });
    this.subscription = this.buttonsService.forwardEvent().subscribe(() => {
      this.onForward();
    });
    this.subscription = this.buttonsService.pauseEvent().subscribe(() => {
      this.onPause();
    });
    this.subscription = this.buttonsService.resetEvent().subscribe(() => {
      this.onReset();
    }); */
}

reinitGame() {
  this.game.gameState = new Array(36)
  .fill(0)
  .map(() => new Array(36)
  .fill(0));
}

  ngOnInit(): void {

    this.columnDefs = this.initColumns();
    this.initData();
    this.frameworkComponents = { gameCellRenderer: GameCellRenderer };
  }



initColumns() {
  let columnDefs: any = [];
  
   let i = 0;
   this.game.gameState.forEach(elem => {
     
    columnDefs.push({ 
      valueGetter: this.columnGetter(i) });
    i++;
   })


    return columnDefs;
  };


   columnGetter(index: number) {
    return function columnGetter(params: any) {
      return params.data[index];
    };
  }



  initData() {
    this.reinitGame();
    this.game.gameState[0][0] = 1;
    this.game.gameState[1][1] = 1;
    this.game.gameState[3][3] = 1;
    this.game.gameState[3][4] = 1;
    this.game.gameState[3][5] = 1;
    this.game.gameState[2][3] = 1;
    this.rowData = this.game.gameState;
  }

  setNewGame(newGame: Game) {
    this.game = newGame;
    this.rowData = this.game.gameState;
  }

  resetGame() {
    this.initData();
  } 


/*   onNextGeneration() {
     this.gameService.computeGameSolution(this.game).subscribe(res => {
      this.game = res;
      this.rowData = this.game.gameState;
    }) 
  }

  onPlay() {
    this.onNextGeneration();
  }

  onForward() {
    this.forward = true;
    interval(2000)
    .pipe(takeWhile(() => this.forward))
    .subscribe(() => {
      this.onNextGeneration();
    });
  }

  onPause() {
    this.forward = false;
  }

  onReset() {
    this.forward = false;
    console.log('onReset');
    this.initData();
  } */
}
