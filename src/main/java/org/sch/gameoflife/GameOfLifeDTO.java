package org.sch.gameoflife;

import java.util.Arrays;

public class GameOfLifeDTO {
  public int[][] getGameState() {
    return gameState;
  }

  public void setGameState(int[][] gameState) {
    this.gameState = gameState;
  }

  int[][] gameState;

  public GameOfLifeDTO(){

  }

  public GameOfLifeDTO(GameOfLife game){
    this.gameState = game.grid;
  }

  @Override
  public String toString() {
    String res = "";
    for (int i = 0; i < gameState.length; i++) {
      String line = "";
      for (int j= 0; j < gameState[i].length; j++) {
        line += gameState[i][j];
      }
      res+=line;
    }

    return "GameOfLifeDTO{" +
      "gameState=" + res +
      '}';
  }

  public void display() {
    for (int i = 0; i < gameState.length; i++) {
      String line = "";
      for (int j= 0; j < gameState[i].length; j++) {
        line += gameState[i][j];
      }
      System.out.println(line);
    }
  }
}
