import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonsService } from './buttons.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFastForward } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'buttons-pannel',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  faPlay = faPlay;
  faFastForward = faFastForward;
  faPause = faPause;
  faUndo = faUndo;

  
  @Output() onPlayEvent = new EventEmitter<void>();
  @Output() onForwardEvent = new EventEmitter<void>();
  @Output() onPauseEvent = new EventEmitter<void>();
  @Output() onResetEvent = new EventEmitter<void>();

  constructor(public buttonService: ButtonsService) { }

  ngOnInit(): void {

  }

  onPlay() {
    this.onPlayEvent.emit();
    console.log('buttonServicePLay');
}

onForward() {
    this.onForwardEvent.emit()
}
 onPause() {
    this.onPauseEvent.emit()
}
onReset() {
    this.onResetEvent.emit()
}


}
