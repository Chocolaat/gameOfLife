import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ButtonsComponent } from '../buttonsPanel/buttons.component';
import { GameComponent } from '../game/game.component';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('dojo', {static: false}) dojoGame!: GameComponent;
  @ViewChild('solution', {static: false}) solutionGame!: GameComponent;


  constructor(public gameService: GameService) { }

  forward = false;

  ngOnInit(): void {
  }

  onPlay() {
    
    this.gameService.computeGameSolution(this.solutionGame.game).subscribe(gameSolution => {
      this.gameService.computeGameDojo(this.dojoGame.game).subscribe(gameDojo => {
        this.dojoGame.setNewGame(gameDojo);
        this.solutionGame.setNewGame(gameSolution);
      });
    });
  }


  onForward() {
    this.forward = true;
    interval(2000)
    .pipe(takeWhile(() => this.forward))
    .subscribe(() => {
      this.onPlay();
    });
  }

  onPause() {
    this.forward = false;
  }
  
  onReset() {
    this.dojoGame.resetGame();
    this.solutionGame.resetGame();
  }
}
