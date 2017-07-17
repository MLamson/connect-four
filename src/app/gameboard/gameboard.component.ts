import { Component, OnInit } from "@angular/core";
import { WonState } from "../won-state";
import { TieState } from "../tie-state";
import { PlayerOneState } from "../player-one-state";
import { PlayerTwoState } from "../player-two-state";
import { BuiltGameboard } from "./built-gameboard";

@Component({
  selector: "app-game-board",
  providers: [ BuiltGameboard ],
  templateUrl: "gameboard.component.html",
  styleUrls: ["gameboard.component.css"]
})
export class GameboardComponent {
  playerOneState: PlayerOneState;
  playerTwoState: PlayerTwoState;
  wonState: WonState;
  tieState: TieState;
  state: State;
  gameboard: any;
  builtGameboard: BuiltGameboard;

  initialGameboard: any = [
    ["open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open"]
  ];

  constructor() {
    this.initialGameboardSettings();
  }

  placePiece(column: number, row: number) {
    this.state.placePiece(column, row);
  }

  resetGame(): void {
    this.state.resetGame();
  }

  initialGameboardSettings(): void {
    this.playerOneState = new PlayerOneState(this);
    this.playerTwoState = new PlayerTwoState(this);
    this.wonState = new WonState(this);
    this.tieState = new TieState(this);
    this.state = this.playerOneState;
    this.gameboard = JSON.parse(JSON.stringify(this.initialGameboard));
  }

  changeToWonState(playerThatWon: string): void {
    this.state = this.wonState;
    this.state.currentPlayer = playerThatWon;
  }

  changeToTieState(): void {
    this.state = this.tieState;
  }

  changeToPlayerTwoState(): void {
    this.state = this.playerTwoState;
  }

  changeToPlayerOneState(): void {
    this.state = this.playerOneState;
  }
}
