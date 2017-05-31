import {GameboardComponent} from "./gameboard/gameboard.component";
export class TieState implements State {

  gameBoardComponent: GameboardComponent;
  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  insertToken(): void {
    alert("game over, cannot add anymore checkers");
  }

  checkWin(): string {
    return "Draw: no one wins";
  }

  checkTie(): boolean {
    return true;
  }
}
