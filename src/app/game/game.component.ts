import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Game } from './game';
import { GameService } from './game.service';
import { GameCellRenderer } from './gameCellRenderer.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  columnDefs: any;
  rowData: any;
  frameworkComponents: any;


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


  game : Game = new Game();

  constructor(public gameService: GameService) { }

  ngOnInit(): void {

    this.columnDefs = this.initColumns();
    this.initData();
    this.frameworkComponents = { gameCellRenderer: GameCellRenderer };
  }



initColumns() {
  let columnDefs: any = [];

  let abValueGetterTest = function () {
    return 4;
  };
  
   let i = 0;
   this.game.gameState.forEach(elem => {
     
    columnDefs.push({ 
      valueGetter: this.abValueGetter(i) });
    i++;
   })


    return columnDefs;
  };


   abValueGetter(index: number) {
    return function abValueGetterToto(params: any) {
      return params.data[index];
    };
  }



  initData() {
    this.game.gameState[0][0] = 1;
    this.game.gameState[1][1] = 1;
    this.game.gameState[3][3] = 1;
    this.game.gameState[3][4] = 1;
    this.game.gameState[3][5] = 1;
    this.game.gameState[2][3] = 1;
    this.rowData = this.game.gameState;
  }

  onNextGeneration() {
    this.gameService.computeGameSolution(this.game).subscribe(res => {
      this.game = res;
      this.rowData = this.game.gameState;
    })
  }


}
