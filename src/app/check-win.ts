import { GameboardComponent } from "./gameboard/gameboard.component";

export class CheckWin {
    gameboard: any;
    constructor(gameboardComponent: GameboardComponent) {
        this.gameboard = gameboardComponent.gameboard;
    }
     checkWin(): boolean {
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