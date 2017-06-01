import {GameboardComponent} from "./gameboard/gameboard.component";
export class TieState implements State {

  gameBoardComponent: GameboardComponent;
  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  placePiece(): void {
    alert("game over, cannot add anymore checkers");
  }

  checkWin(): string {
    return "Draw: no one wins";
  }

  checkTie(): string {
    return "Draw: No one wins";
  }
}
