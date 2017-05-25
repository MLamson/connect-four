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

  emptyGameboard: any = [["open", "open", "open", "open", "open", "open"],
                        ["open", "open", "open", "open", "open", "open"],
                        ["open", "open", "open", "open", "open", "open"],
                        ["open", "open", "open", "open", "open", "open"],
                        ["open", "open", "open", "open", "open", "open"],
                        ["open", "open", "open", "open", "open", "open"],
                        ["open", "open", "open", "open", "open", "open"]];

  constructor() {
    this.noTokenState = new NoTokenState(this);
    this.hasTokenState = new HasTokenState(this);
    this.state = this.noTokenState;
    this.currentPlayer = "yellow";

    this.gameboard = this.emptyGameboard;
  }

  ngOnInit() {
  }

  insertToken(column: number, row: number) {
    this.state = this.getHasTokenState();
    this.state.insertToken(column, row);
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
    this.gameboard = this.emptyGameboard;
  }
}
