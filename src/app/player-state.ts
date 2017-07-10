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

    this.placePieceInLowestOpenSpace(column, row);

    if (this.checkTie()) {
      this.gameboardComponent.changeToTieState();
      return;
    }
    if (this.checkWin()) {
      this.gameboardComponent.changeToWonState(this.currentPlayer);
      return;
    }
    this.updatePlayer();
  }


  placePieceInLowestOpenSpace(column: number, row: number): void {

    if (this.gameboardComponent.gameboard[column][row] === "open") {

    }

    if (this.gameboardComponent.gameboard[column][row] === "open") {

      if (this.gameboardComponent.gameboard[column][1] !== "open") {
        this.gameboardComponent.gameboard[column][0] = this.gameboardComponent.state.currentPlayer;
      }
      else if (this.gameboardComponent.gameboard[column][2] !== "open") {
        this.gameboardComponent.gameboard[column][1] = this.gameboardComponent.state.currentPlayer;
      }
      else if (this.gameboardComponent.gameboard[column][3] !== "open") {
        this.gameboardComponent.gameboard[column][2] = this.gameboardComponent.state.currentPlayer;
      }
      else if (this.gameboardComponent.gameboard[column][4] !== "open") {
        this.gameboardComponent.gameboard[column][3] = this.gameboardComponent.state.currentPlayer;
      }
      else if (this.gameboardComponent.gameboard[column][5] !== "open") {
        this.gameboardComponent.gameboard[column][4] = this.gameboardComponent.state.currentPlayer;
      }
      else {
        this.gameboardComponent.gameboard[column][5] = this.gameboardComponent.state.currentPlayer;
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
