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

  resetGame(): void {
    this.gameBoardComponent.initialGameboardSettings();
  }
}
