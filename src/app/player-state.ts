import { GameboardComponent } from "./gameboard/gameboard.component";
import { CheckWinOrTie } from "./check-win-or-tie";

export abstract class Player implements State {
  currentPlayer: string;
  gameBoardComponent: GameboardComponent;
  checkWinner: CheckWinOrTie = new CheckWinOrTie();

  constructor(gameBoardComponent: GameboardComponent) {
    this.gameBoardComponent = gameBoardComponent;
  }

  resetGame(): void {
    this.gameBoardComponent.initialGameboardSettings();
  }

  abstract updatePlayer();

  placePiece(column: number, row: number): any {
    if (this.gameBoardComponent.gameboard[column][row] === "open") {
      this.placePieceInLowestOpenSpace(column, row);
      if (this.checkTie()) {
        this.gameBoardComponent.getTieState();
        return;
      }
      if (this.checkWin()) {
        this.gameBoardComponent.getWonState();
        return;
      }
      this.gameBoardComponent.state.updatePlayer();
    }
  }

  placePieceInLowestOpenSpace(column: number, row: number): void {
    if (this.gameBoardComponent.gameboard[column][row] === "open") {
      if (this.gameBoardComponent.gameboard[column][1] !== "open") {
        this.gameBoardComponent.gameboard[column].splice(
          0,
          1,
          this.gameBoardComponent.state.currentPlayer
        );
      } else if (this.gameBoardComponent.gameboard[column][2] !== "open") {
        this.gameBoardComponent.gameboard[column].splice(
          1,
          1,
          this.gameBoardComponent.state.currentPlayer
        );
      } else if (this.gameBoardComponent.gameboard[column][3] !== "open") {
        this.gameBoardComponent.gameboard[column].splice(
          2,
          1,
          this.gameBoardComponent.state.currentPlayer
        );
      } else if (this.gameBoardComponent.gameboard[column][4] !== "open") {
        this.gameBoardComponent.gameboard[column].splice(
          3,
          1,
          this.gameBoardComponent.state.currentPlayer
        );
      } else if (this.gameBoardComponent.gameboard[column][5] !== "open") {
        this.gameBoardComponent.gameboard[column].splice(
          4,
          1,
          this.gameBoardComponent.state.currentPlayer
        );
      } else {
        this.gameBoardComponent.gameboard[column].splice(
          5,
          1,
          this.gameBoardComponent.state.currentPlayer
        );
      }
    }
  }

  checkWin(): boolean {
    return this.checkWinner.checkWin(this.gameBoardComponent);
  }

  checkTie(): any {
    return this.checkWinner.checkTie(this.gameBoardComponent);
  }
}
