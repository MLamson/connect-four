import {GameBoardComponent} from "./game-board/game-board.component";
export class HasTokenState implements State {
  gameBoardComponent: GameBoardComponent;
  constructor(gameBoardComponent: GameBoardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }
  insertToken() {}
}
