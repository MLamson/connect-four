import { Component, OnInit } from '@angular/core';
import { NoTokenState } from "../no-token-state";
import { HasTokenState } from "../has-token-state";

@Component({
  selector: 'app-game-board',
  templateUrl: 'gameboard.component.html',
  styleUrls: ['gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  noTokenState: NoTokenState;
  hasTokenState: HasTokenState;
  state: State;
  gameboard: any;
  currentPlayer: string;
  winningPlayer: string;

  constructor() {
    this.noTokenState = new NoTokenState(this);
    this.hasTokenState = new HasTokenState(this);
    this.state = this.noTokenState;
    this.currentPlayer = "yellow";

    this.gameboard = [["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"]];
  }

  ngOnInit() {
  }

  insertToken(column: number, row: number) {
    console.log(column, row);
    if (this.gameboard[column][row] === 'open') {
      console.log(this.gameboard[column][row]);
      this.state = this.getHasTokenState();
      this.state.insertToken(column, row);
      this.isFourInARow();
      this.checkForWinner();
    }
  }

  setState(state: State): void {
    this.state = state;
  }

  getHasTokenState(): State {
    return this.hasTokenState;
  }

  getNoTokenState(): State {
    return this.noTokenState;
  }

  resetBoard(): void {
    this.currentPlayer = "yellow";
    this.gameboard = [["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"]];
  }

  private checkForWinner(): string {
    this.winningPlayer = "none";
    return this.winningPlayer;
  }

  isFourInARow(): boolean {
    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 0; row <= 5; row++) {
        if (this.checkFourInARowHorizontal(column, row)) {
          console.log("winner Hori");
          return true;
        }
      }
    }

    for (let row: number = 0; row <= 3; row++) {
      for (let column: number = 0; column <= 6; column++) {
        if (this.checkForInARowVertical(column, row)) {
          console.log("Winner Vert");
          return true;
        }
      }
    }

    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowDiagonalStartBottomRight(column, row)) {
          console.log("winner Diag for loop");
          return true;
        }
      }
    }

    for (let column: number = 6; column >= 3; column--) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowStartBottomLeft(column, row)) {
          console.log("winner Diag for loop");
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
