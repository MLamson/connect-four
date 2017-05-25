import {GameboardComponent} from "./gameboard/gameboard.component";
export class HasTokenState implements State {
  gameBoardComponent: GameboardComponent;
  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }
  insertToken(column: number, row: number) {

    console.log(column, row);

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

    if (this.gameBoardComponent.currentPlayer === "yellow") {
      this.gameBoardComponent.currentPlayer = "red";
    }
    else if (this.gameBoardComponent.currentPlayer === "red") {
      this.gameBoardComponent.currentPlayer = "yellow";
    }

    this.gameBoardComponent.setState(this.gameBoardComponent.getNoTokenState());
  }
}
