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
  gameResult: string = "";
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
     //all can go to state
    if (this.gameboard[column][row] === "open") {
      this.state.placePiece(column, row); 
    } 
  }

   resetGame(): void {
     this.state.resetGame();
  }

  initialGameboardSettings(): void {
    this.playerOneState = new PlayerOneState(this);
    this.playerTwoState = new PlayerTwoState(this);
    this.wonState = new WonState(this);
    this.tieState = new TieState(this);
    this.state = this.playerOneState;
    this.gameResult = "";
    this.gameboard = JSON.parse(JSON.stringify(this.initialGameboard));
  }

  getWonState() {
    this.gameResult = "The Winner is: " + this.state.currentPlayer;
    return this.wonState;
  }

  getTieState() {
    this.gameResult = "Draw";
    return this.tieState;
  }

  getPlayerTwoState(): State {
    return this.playerTwoState;
  }

   getPlayerOneState(): State {
    return this.playerOneState;
  }
}
