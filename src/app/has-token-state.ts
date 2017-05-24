import {GameBoardComponent} from "./game-board/game-board.component";
export class HasTokenState implements State {
  gameBoardComponent: GameBoardComponent;
  constructor(gameBoardComponent: GameBoardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }
  insertToken() {
    if (this.gameBoardComponent.currentPlayer === "Yellow") {
      this.gameBoardComponent.currentPlayer = "Red";
    }
    else if (this.gameBoardComponent.currentPlayer === "Red") {
      this.gameBoardComponent.currentPlayer = "Yellow";
    }



    this.gameBoardComponent.setState(this.gameBoardComponent.getNoTokenState());
  }
}
