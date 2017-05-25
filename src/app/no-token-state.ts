import {GameboardComponent} from "./gameboard/gameboard.component";
export class NoTokenState implements State {
  gameBoardComponent: GameboardComponent;

  constructor(gameboardComponent: GameboardComponent) {
    this.gameBoardComponent = gameboardComponent;
  }
  insertToken(): void {
    this.gameBoardComponent.setState(this.gameBoardComponent.getHasTokenState());
  }
}
