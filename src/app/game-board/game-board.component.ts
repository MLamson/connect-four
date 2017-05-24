import { Component, OnInit } from '@angular/core';
import { NoTokenState } from "../no-token-state";
import { HasTokenState } from "../has-token-state";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  noTokenState: NoTokenState;
  hasTokenState: HasTokenState;
  state: State;
  gameBoard: any;
  currentPlayer: string;

  constructor() {
    this.noTokenState = new NoTokenState(this);
    this.hasTokenState = new HasTokenState(this);
    this.state = this.noTokenState;
    this.currentPlayer = "yellow";

    this.gameBoard = [["open", "open", "open", "open", "open", "open"],
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
}
