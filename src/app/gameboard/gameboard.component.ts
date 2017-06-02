import { Component, OnInit } from '@angular/core';

import { WonState } from "../won-state";
import { TieState } from "../tie-state";
import { PlayerOneState } from "../player-one-state";
import { PlayerTwoState } from "../player-two-state";

@Component({
  selector: 'app-game-board',
  templateUrl: 'gameboard.component.html',
  styleUrls: ['gameboard.component.css']
})
export class GameboardComponent {
  playerOneState: PlayerOneState;
  playerTwoState: PlayerTwoState;
  wonState: WonState;
  tieState: TieState;
  state: State;
  currentPlayer: string;
  winningPlayer: string = "";
  gameboard: any;
  checkWinner: any;
  initialGameboard: any = [["open", "open", "open", "open", "open", "open"],
                          ["open", "open", "open", "open", "open", "open"],
                          ["open", "open", "open", "open", "open", "open"],
                          ["open", "open", "open", "open", "open", "open"],
                          ["open", "open", "open", "open", "open", "open"],
                          ["open", "open", "open", "open", "open", "open"],
                          ["open", "open", "open", "open", "open", "open"]];

  constructor() {
   this.initialGameboardSettings();
  }

   placePiece(column: number, row: number) {
    if (this.gameboard[column][row] === "open") {
      this.state.placePiece(column, row);
      if (this.state === this.wonState) {
        this.winningPlayer = this.state.checkWin();
      }   
    } 
    if (this.state === this.tieState) {
        this.winningPlayer = this.state.checkTie();
      }
  }

   resetBoard(): void {
     this.playerOneState.resetGame();
     this.playerTwoState.resetGame();
     this.initialGameboardSettings();
  }

  initialGameboardSettings(): void {
    this.playerOneState = new PlayerOneState(this);
    this.playerTwoState = new PlayerTwoState(this);
    this.wonState = new WonState(this);
    this.tieState = new TieState(this);
    this.state = this.playerOneState;
    this.currentPlayer = "yellow";    
    this.winningPlayer = "";
    this.gameboard = JSON.parse(JSON.stringify(this.initialGameboard));
  }

  getWonState() {
    return this.wonState;
  }

  getTieState() {
    return this.tieState;
  }
}
