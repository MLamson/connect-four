import {GameboardComponent} from "./gameboard/gameboard.component";
import { CheckWin } from "./check-win";

export abstract class Player implements State{
    gameBoardComponent: GameboardComponent;
    checkWinner: CheckWin = new CheckWin();

  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }
    resetGame(): void {
        console.log("in resetGame on playerState");
    }

     placePiece(column: number, row: number) {

    this.lowestOpenSpace(column, row);

    if (this.checkWin()) {
      this.gameBoardComponent.state = this.gameBoardComponent.getWonState();
    }
    else {
      if (this.gameBoardComponent.state.currentPlayer === "Player One") {
          this.gameBoardComponent.state = this.gameBoardComponent.getPlayerTwoState();
      }
      else if (this.gameBoardComponent.state.currentPlayer === "Player Two") {
          this.gameBoardComponent.state = this.gameBoardComponent.getPlayerOneState();
      }
    }
     if (this.checkTie()) {
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