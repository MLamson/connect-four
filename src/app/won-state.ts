import {GameboardComponent} from "./gameboard/gameboard.component";
export class WonState implements State {
  currentPlayer: string;
  gameBoardComponent: GameboardComponent;
  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  placePiece(): void {
    alert("game over, cannot add anymore checkers");
  }

  checkWin(): string {
    return "The winner is: " + this.gameBoardComponent.state.currentPlayer;
  }

  checkTie(): string {
    return "checkTie in won state should do nothing";
  }

  resetGame(): void {

  }
}
