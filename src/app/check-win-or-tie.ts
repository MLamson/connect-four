import { GameboardComponent } from "./gameboard/gameboard.component";

export class CheckWinOrTie {

 checkTie(gameboard: any): any {
    let numberOfOpenSpaces: number = 0;
    for (let i: number = 0; i < 6; i++) {
      for (let j: number = 0; i < 7; i++) {
        if (gameboard[i][j] === "open") {
          numberOfOpenSpaces++;
        }
      }
    }
    return !(numberOfOpenSpaces > 0);
  }

checkWin(gameboard: any): boolean {
    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 0; row <= 5; row++) {
        if (this.checkFourInARowHorizontal(column, row, gameboard)) {
          return true;
        }
      }
    }

    for (let row: number = 0; row <= 3; row++) {
      for (let column: number = 0; column <= 6; column++) {
        if (this.checkForInARowVertical(column, row, gameboard)) {
          return true;
        }
      }
    }

    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowDiagonalStartBottomRight(column, row, gameboard)) {
          return true;
        }
      }
    }

    for (let column: number = 6; column >= 3; column--) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowStartBottomLeft(column, row, gameboard)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkFourInARowStartBottomLeft(column: number, row: number, gameboard: any) {
    return gameboard[column][row] === gameboard[column - 1][row - 1]
      && gameboard[column - 1][row - 1] === gameboard[column - 2][row - 2]
      && gameboard[column - 2][row - 2] === gameboard[column - 3][row - 3]
      && gameboard[column][row] !== "open";
  }

  private checkFourInARowDiagonalStartBottomRight(column: number, row: number, gameboard: any) {
    return gameboard[column][row] === gameboard[column + 1][row - 1]
      && gameboard[column + 1][row - 1] === gameboard[column + 2][row - 2]
      && gameboard[column + 2][row - 2] === gameboard[column + 3][row - 3]
      && gameboard[column][row] !== "open";
  }

  private checkForInARowVertical(column: number, row: number, gameboard: any) {
    return gameboard[column][row] === gameboard[column][row + 1]
      && gameboard[column][row + 1] === gameboard[column][row + 2]
      && gameboard[column][row + 2] === gameboard[column][row + 3]
      && gameboard[column][row] !== "open";
  }

  private checkFourInARowHorizontal(column: number, row: number, gameboard: any) {
    return gameboard[column][row] === gameboard[column + 1][row]
      && gameboard[column + 1][row] === gameboard[column + 2][row]
      && gameboard[column + 2][row] === gameboard[column + 3][row]
      && gameboard[column][row] !== "open";
  }
}
