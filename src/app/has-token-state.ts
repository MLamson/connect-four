import {GameBoardComponent} from "./game-board/game-board.component";
export class HasTokenState implements State {
  gameBoardComponent: GameBoardComponent;
  constructor(gameBoardComponent: GameBoardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }
  insertToken(column: number, row: number) {

    console.log(column, row);

    if (this.gameBoardComponent.gameBoard[column][row] === 'open') {
      if (this.gameBoardComponent.gameBoard[column][1] !== 'open') {
        this.gameBoardComponent.gameBoard[column].splice(0, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameBoard[column][2] !== 'open') {
        this.gameBoardComponent.gameBoard[column].splice(1, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameBoard[column][3] !== 'open') {
        this.gameBoardComponent.gameBoard[column].splice(2, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameBoard[column][4] !== 'open') {
        this.gameBoardComponent.gameBoard[column].splice(3, 1, this.gameBoardComponent.currentPlayer);
      }
      else if (this.gameBoardComponent.gameBoard[column][5] !== 'open') {
        this.gameBoardComponent.gameBoard[column].splice(4, 1, this.gameBoardComponent.currentPlayer);
      }
      else {
        this.gameBoardComponent.gameBoard[column].splice(5, 1, this.gameBoardComponent.currentPlayer);
      }
    }

    if (this.gameBoardComponent.currentPlayer === "yellow") {
      this.gameBoardComponent.currentPlayer = "red";
    }
    else if (this.gameBoardComponent.currentPlayer === "red") {
      this.gameBoardComponent.currentPlayer = "yellow";
    }

    this.gameBoardComponent.setState(this.gameBoardComponent.getNoTokenState());
  }
}
