import {GameboardComponent} from "./gameboard/gameboard.component";

export class AddPieceState implements State {
  gameBoardComponent: GameboardComponent;

  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  insertToken(column: number, row: number) {

    this.lowestOpenSpace(column, row);

    if (this.gameBoardComponent.checkWin()) {
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

  checkWin(): string {
    return "do I call is four in a row from here?";
  }

  checkTie(): string {
    return "check tie in add game piece";
  }
}
