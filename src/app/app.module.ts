import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from './game/game.service';
import { Game } from './game/game';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
