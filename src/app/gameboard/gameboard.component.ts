import { Component, OnInit } from '@angular/core';

import { AddGamePiece } from "../add-game-piece";
import { WonState } from "../won-state";

@Component({
  selector: 'app-game-board',
  templateUrl: 'gameboard.component.html',
  styleUrls: ['gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  addGamePiece: AddGamePiece;
  wonState: WonState;
  state: State;
  currentPlayer: string;
  winningPlayer: string;
  gameboard: any;
  initialGameboard: any = [["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"]];

  constructor() {
    this.addGamePiece = new AddGamePiece(this);
    this.wonState = new WonState(this);
    this.state = this.addGamePiece;
    this.currentPlayer = "yellow";

    this.gameboard = this.initialGameboard.concat();
  }

  ngOnInit() {
  }

  insertToken(column: number, row: number) {
    if (this.gameboard[column][row] === "open") {
      this.state.insertToken(column, row);
    }
  }

  getWonState() {
    return this.wonState;
  }

  resetBoard(): void {
    this.currentPlayer = "yellow";
    this.gameboard = this.initialGameboard.concat();
    this.state = this.addGamePiece;
  }

  checkForWinner(): string {
    this.winningPlayer = "none";
    return this.winningPlayer;
  }

  isFourInARow(): boolean {
    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 0; row <= 5; row++) {
        if (this.checkFourInARowHorizontal(column, row)) {
          return true;
        }
      }
    }

    for (let row: number = 0; row <= 3; row++) {
      for (let column: number = 0; column <= 6; column++) {
        if (this.checkForInARowVertical(column, row)) {
          return true;
        }
      }
    }

    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowDiagonalStartBottomRight(column, row)) {
          return true;
        }
      }
    }

    for (let column: number = 6; column >= 3; column--) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowStartBottomLeft(column, row)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkFourInARowStartBottomLeft(column: number, row: number) {
    return this.gameboard[column][row] === this.gameboard[column - 1][row - 1]
      && this.gameboard[column - 1][row - 1] === this.gameboard[column - 2][row - 2]
      && this.gameboard[column - 2][row - 2] === this.gameboard[column - 3][row - 3]
      && this.gameboard[column][row] !== "open";
  }

  private checkFourInARowDiagonalStartBottomRight(column: number, row: number) {
    return this.gameboard[column][row] === this.gameboard[column + 1][row - 1]
      && this.gameboard[column + 1][row - 1] === this.gameboard[column + 2][row - 2]
      && this.gameboard[column + 2][row - 2] === this.gameboard[column + 3][row - 3]
      && this.gameboard[column][row] !== "open";
  }

  private checkForInARowVertical(column: number, row: number) {
    return this.gameboard[column][row] === this.gameboard[column][row + 1]
      && this.gameboard[column][row + 1] === this.gameboard[column][row + 2]
      && this.gameboard[column][row + 2] === this.gameboard[column][row + 3]
      && this.gameboard[column][row] !== "open";
  }

  private checkFourInARowHorizontal(column: number, row: number) {
    return this.gameboard[column][row] === this.gameboard[column + 1][row]
      && this.gameboard[column + 1][row] === this.gameboard[column + 2][row]
      && this.gameboard[column + 2][row] === this.gameboard[column + 3][row]
      && this.gameboard[column][row] !== "open";
  }
}
