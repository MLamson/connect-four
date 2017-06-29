import {GameboardComponent} from "./gameboard/gameboard.component";
export class WonState implements State {
  currentPlayer: string;
  
  gameboardComponent: GameboardComponent;
  constructor(gameBoardComponent: GameboardComponent) {
    this.gameboardComponent = gameBoardComponent;
  }
  gameResult: string = "Winner is: ";
  placePiece(): void {
    alert("game over, cannot add anymore checkers");
  }

  resetGame(): void {
    this.gameboardComponent.initialGameboardSettings();
  }

  updatePlayer(): void {
    
  }
}
