import {GameboardComponent} from "./gameboard/gameboard.component";
import { CheckWin } from "./check-win";
export class PlacePieceState implements State {
  gameBoardComponent: GameboardComponent;
  checkWinner: CheckWin = new CheckWin();

  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  insertToken(column: number, row: number) {

    this.lowestOpenSpace(column, row);

   

    if (this.checkWin()) {
      this.gameBoardComponent.state = this.gameBoardComponent.getWonState();
    }
    else {
      if (this.gameBoardComponent.currentPlayer === "yellow") {
        this.gameBoardComponent.currentPlayer = "red";
      }
      else if (this.gameBoardComponent.currentPlayer === "red") {
        this.gameBoardComponent.currentPlayer = "yellow";
      }
    }
     if (this.checkTie()) {
      console.log("TIE");
      this.gameBoardComponent.state = this.gameBoardComponent.getTieState();
    }
  }

  lowestOpenSpace(column: number, row: number): void {

    if (this.gameBoardComponent.gameboard[column][row] === 'open') {
      if (this.gameBoardComponent.gameboard[column][1] !== 'open') {
        this.gameBoardComponent.gameboard[column].splice(0, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameboard[column][2] !== 'open') {
        this.gameBoardComponent.gameboard[column].splice(1, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameboard[column][3] !== 'open') {
        this.gameBoardComponent.gameboard[column].splice(2, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameboard[column][4] !== 'open') {
        this.gameBoardComponent.gameboard[column].splice(3, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameboard[column][5] !== 'open') {
        this.gameBoardComponent.gameboard[column].splice(4, 1, this.gameBoardComponent.currentPlayer);
      }
      else {
        this.gameBoardComponent.gameboard[column].splice(5, 1, this.gameBoardComponent.currentPlayer);
      }
    }
  }

  checkWin(): boolean {
    return this.checkWinner.checkWin(this.gameBoardComponent);
  }
  
  checkTie(): any {
    let numberOfOpenSpaces: number = 0;
    for (let i: number = 0; i < 6; i++) {
      for (let j: number = 0; i < 7; i++) {
        if (this.gameBoardComponent.gameboard[i][j] === "open") {
          console.log(numberOfOpenSpaces);
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
}
