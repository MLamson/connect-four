import {GameboardComponent} from "./gameboard/gameboard.component";
export class TieState implements State {
  currentPlayer: string;
  gameStatus: string = "Draw";
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
