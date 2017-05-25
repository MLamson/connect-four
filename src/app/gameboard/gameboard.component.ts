import { Component, OnInit } from '@angular/core';
import { NoTokenState } from "../no-token-state";
import { HasTokenState } from "../has-token-state";

@Component({
  selector: 'app-game-board',
  templateUrl: 'gameboard.component.html',
  styleUrls: ['gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  noTokenState: NoTokenState;
  hasTokenState: HasTokenState;
  state: State;
  gameboard: any;
  currentPlayer: string;
  winningPlayer: string;

  constructor() {
    this.noTokenState = new NoTokenState(this);
    this.hasTokenState = new HasTokenState(this);
    this.state = this.noTokenState;
    this.currentPlayer = "yellow";

    this.gameboard = [["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"]];
  }

  ngOnInit() {
  }

  insertToken(column: number, row: number) {
    console.log(column, row);
    if (this.gameboard[column][row] === 'open') {
      console.log(this.gameboard[column][row]);
      this.state = this.getHasTokenState();
      this.state.insertToken(column, row);
      this.checkForWinner();
    }
  }

  setState(state: State): void {
    this.state = state;
  }

  getHasTokenState(): State {
    return this.hasTokenState;
  }

  getNoTokenState(): State {
    return this.noTokenState;
  }

  resetBoard(): void {
    this.currentPlayer = "yellow";
    this.gameboard = [["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"],
                      ["open", "open", "open", "open", "open", "open"]];
  }

  private checkForWinner(): string {
    this.winningPlayer = "none";
    return this.winningPlayer;
  }

  isFourInARow(): boolean {
    for (let column: number = 0; column <= 6; column++) {
      if (this.gameboard[column][5] === this.gameboard[column][5]
        && this.gameboard[column][5] === this.gameboard[column][5]
        && this.gameboard[column][5] === this.gameboard[column][5]
        && this.gameboard[column][5] !== "open") {
        return true;
      }
    }
    return false;
  }
}
