import { Component, OnInit } from '@angular/core';

import { PlacePieceState } from "../place-piece-state";
import { WonState } from "../won-state";
import { TieState } from "../tie-state";

@Component({
  selector: 'app-game-board',
  templateUrl: 'gameboard.component.html',
  styleUrls: ['gameboard.component.css']
})
export class GameboardComponent {
  addGamePiece: PlacePieceState;
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
    this.addGamePiece = new PlacePieceState(this);
    this.wonState = new WonState(this);
    this.tieState = new TieState(this);
    this.state = this.addGamePiece;
    this.currentPlayer = "yellow";
    this.gameboard = this.initialGameboard.slice();
  }

   resetBoard(): void {
    this.gameboard = [["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"]];  
    this.addGamePiece = new PlacePieceState(this);
    this.wonState = new WonState(this);
    this.tieState = new TieState(this);
    this.state = this.addGamePiece;
    this.currentPlayer = "yellow";
    this.winningPlayer = "";
  }

  insertToken(column: number, row: number) {
    if (this.gameboard[column][row] === "open") {
      this.state.insertToken(column, row);
      if (this.state === this.wonState) {
        this.winningPlayer = this.state.checkWin();
      }   
    } 
    if (this.state === this.tieState) {
        this.winningPlayer = this.state.checkTie();
      }
  }

  getWonState() {
    return this.wonState;
  }

  getTieState() {
    return this.tieState;
  }
}
