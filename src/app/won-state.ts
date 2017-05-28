import {GameboardComponent} from "./gameboard/gameboard.component";
export class WonState implements State {

  gameBoardComponent: GameboardComponent;
  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  insertToken(): string {
    return "game over, cannot add anymore checkers";
  }

  checkWin(): string {
    return "The winner is: " + this.gameBoardComponent.currentPlayer;
  }

  checkTie(): string {
    return "no winner";
  }
}
