import { Component, OnInit } from '@angular/core';
import {NoTokenState} from "../no-token-state";
import {HasTokenState} from "../has-token-state";

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


  constructor() {
    this.noTokenState = new NoTokenState(this);
    this.hasTokenState = new HasTokenState(this);
    this.state = this.noTokenState;

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

  insertToken() {
    this.state.insertToken();
  }

  setState(state: State): void {
    this.state = state;
  }

  getHasTokenState(): State {
    return this.hasTokenState;
  }
}
