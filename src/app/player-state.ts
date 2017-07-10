import { GameboardComponent } from "./gameboard/gameboard.component";
import { CheckWinOrTie } from "./check-win-or-tie";

export abstract class Player implements State {
  currentPlayer: string;
  gameStatus: string = "Current Player: ";
  gameboardComponent: GameboardComponent;
  checkWinner: CheckWinOrTie = new CheckWinOrTie();

  constructor(gameBoardComponent: GameboardComponent) {
    this.gameboardComponent = gameBoardComponent;
  }

  resetGame(): void {
    this.gameboardComponent.initialGameboardSettings();
  }

  abstract updatePlayer();

  placePiece(column: number, row: number): any {
    if (!(this.gameboardComponent.gameboard[column][row] === "open")) {
      return;
    }

    this.placePieceInLowestOpenSpace(column);

    if (this.checkWin()) {
      this.gameboardComponent.changeToWonState(this.currentPlayer);
      return;
    }
    if (this.checkTie()) {
      this.gameboardComponent.changeToTieState();
      return;
    }
    this.updatePlayer();
  }


  placePieceInLowestOpenSpace(column: number): void {
    for (let index: number = 1; index < 7; index++) {
      if (this.gameboardComponent.gameboard[column][index] !== "open") {
        this.gameboardComponent.gameboard[column][index - 1] = this.gameboardComponent.state.currentPlayer;
        return;
      }
    }
  }

  checkWin(): boolean {
    return this.checkWinner.checkWin(this.gameboardComponent.gameboard);
  }

  checkTie(): any {
    return this.checkWinner.checkTie(this.gameboardComponent.gameboard);
  }
}
