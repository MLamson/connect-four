import { GameboardComponent } from "./gameboard/gameboard.component";

export class CheckWin {

 checkTie(gameboardComponent: GameboardComponent): any {
    let numberOfOpenSpaces: number = 0;
    for (let i: number = 0; i < 6; i++) {
      for (let j: number = 0; i < 7; i++) {
        if (gameboardComponent.gameboard[i][j] === "open") {
          numberOfOpenSpaces++;
        }
      }
    }
    if (numberOfOpenSpaces > 0) {
      return false;
    } else {
      return true;
    }
  }
  
checkWin(gameboardComponent: GameboardComponent): boolean {
    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 0; row <= 5; row++) {
        if (this.checkFourInARowHorizontal(column, row, gameboardComponent)) {
          return true;
        }
      }
    }

    for (let row: number = 0; row <= 3; row++) {
      for (let column: number = 0; column <= 6; column++) {
        if (this.checkForInARowVertical(column, row, gameboardComponent)) {
          return true;
        }
      }
    }

    for (let column: number = 0; column <= 3; column++) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowDiagonalStartBottomRight(column, row, gameboardComponent)) {
          return true;
        }
      }
    }

    for (let column: number = 6; column >= 3; column--) {
      for (let row: number = 5; row >= 0; row--) {
        if (this.checkFourInARowStartBottomLeft(column, row, gameboardComponent)) {
          return true;
        }
      }
    }
    return false;
  }

  private checkFourInARowStartBottomLeft(column: number, row: number, gameboardComponent: GameboardComponent) {
    return gameboardComponent.gameboard[column][row] === gameboardComponent.gameboard[column - 1][row - 1]
      && gameboardComponent.gameboard[column - 1][row - 1] === gameboardComponent.gameboard[column - 2][row - 2]
      && gameboardComponent.gameboard[column - 2][row - 2] === gameboardComponent.gameboard[column - 3][row - 3]
      && gameboardComponent.gameboard[column][row] !== "open";
  }

  private checkFourInARowDiagonalStartBottomRight(column: number, row: number, gameboardComponent: GameboardComponent) {
    return gameboardComponent.gameboard[column][row] === gameboardComponent.gameboard[column + 1][row - 1]
      && gameboardComponent.gameboard[column + 1][row - 1] === gameboardComponent.gameboard[column + 2][row - 2]
      && gameboardComponent.gameboard[column + 2][row - 2] === gameboardComponent.gameboard[column + 3][row - 3]
      && gameboardComponent.gameboard[column][row] !== "open";
  }

  private checkForInARowVertical(column: number, row: number, gameboardComponent: GameboardComponent) {
    return gameboardComponent.gameboard[column][row] === gameboardComponent.gameboard[column][row + 1]
      && gameboardComponent.gameboard[column][row + 1] === gameboardComponent.gameboard[column][row + 2]
      && gameboardComponent.gameboard[column][row + 2] === gameboardComponent.gameboard[column][row + 3]
      && gameboardComponent.gameboard[column][row] !== "open";
  }

  private checkFourInARowHorizontal(column: number, row: number, gameboardComponent: GameboardComponent) {
    return gameboardComponent.gameboard[column][row] === gameboardComponent.gameboard[column + 1][row]
      && gameboardComponent.gameboard[column + 1][row] === gameboardComponent.gameboard[column + 2][row]
      && gameboardComponent.gameboard[column + 2][row] === gameboardComponent.gameboard[column + 3][row]
      && gameboardComponent.gameboard[column][row] !== "open";
  }
}