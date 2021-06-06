import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';

@Injectable()
export class GameService {

  private _newGame = 'http://localhost:8080/newGame';
  private _nextGenerationSolution = 'http://localhost:8080/nextGenerationSolution';
  private _nextGenerationDojo = 'http://localhost:8080/nextGenerationDojo';

  constructor(private _httpClient: HttpClient) {
  }

  newGame() {
      return this._httpClient.get<Game>(this._newGame);
  }

  computeGameSolution(game: Game) {
    return this._httpClient.post<Game>(this._nextGenerationSolution, game);
}

computeGameDojo(game: Game) {
    return this._httpClient.post<Game>(this._nextGenerationDojo, game);
}

}