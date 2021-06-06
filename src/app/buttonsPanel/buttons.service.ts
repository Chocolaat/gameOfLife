import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ButtonsState } from './buttonsState';
import { GameService } from '../game/game.service';

@Injectable()
export class ButtonsService {

    
  //private onPlay = new Subject<void>();
 // private onForward = new Subject<void>();
  //private onPause = new Subject<void>();
 // private onReset = new Subject<void>();


  constructor(private _httpClient: HttpClient, public gameService: GameService) {
  }

/* playEvent(): Observable<void> {
    return this.onPlay.asObservable();
}
forwardEvent(): Observable<void> {
    return this.onForward.asObservable();
}
pauseEvent(): Observable<void> {
    return this.onPause.asObservable();
}
resetEvent(): Observable<void> {
    return this.onReset.asObservable();
} */


}