import {GameBoardComponent} from "./game-board/game-board.component";
export class NoTokenState implements State {
  gameBoardComponent: GameBoardComponent;

  constructor(gameboardComponent: GameBoardComponent) {
    this.gameBoardComponent = gameboardComponent;
  }
  insertToken(): void {
    this.gameBoardComponent.setState(this.gameBoardComponent.getHasTokenState());
  }
}
