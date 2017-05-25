/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameboardComponent } from './gameboard.component';
import {NoTokenState} from "../no-token-state";
import {HasTokenState} from "../has-token-state";

describe('GameboardComponent', () => {
  let component: GameboardComponent;
  let fixture: ComponentFixture<GameboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create GameBoard', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    expect(gameBoardComponent).toEqual(new GameboardComponent());
  });

  it('should create GameBoard with empty board', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    let gameBoard: any = [["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]];
    expect(gameBoard).toEqual(gameBoardComponent.gameboard);
  });

  it('should reset GameBoard with empty board', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    let initialGameBoard: any = [["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["yellow", "red", "open", "open", "open", "open"]];
    gameBoardComponent.gameboard = initialGameBoard;
    gameBoardComponent.resetBoard();
    let restartedGameBoard: any = [["open", "open", "open", "open", "open", "open"],
                                  ["open", "open", "open", "open", "open", "open"],
                                  ["open", "open", "open", "open", "open", "open"],
                                  ["open", "open", "open", "open", "open", "open"],
                                  ["open", "open", "open", "open", "open", "open"],
                                  ["open", "open", "open", "open", "open", "open"],
                                  ["open", "open", "open", "open", "open", "open"]];
    expect(gameBoardComponent.gameboard).toEqual(restartedGameBoard);
  });

  it('should create GameBoard with initial state of NoToken', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    let result: NoTokenState = new NoTokenState(gameBoardComponent);
    expect(result).toEqual(gameBoardComponent.state);
  });

  it('should call insertToken function and set state to HasTokenState', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    gameBoardComponent.insertToken(1, 1);
    expect(gameBoardComponent.state).toEqual(new NoTokenState(gameBoardComponent));
  });

  it('should create GameBoard with currentPlayer set', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    expect(gameBoardComponent.currentPlayer).toEqual("yellow");
  });

  it('should update currentPlayer when in hasTokenState', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    gameBoardComponent.insertToken(1, 1);
    expect(gameBoardComponent.currentPlayer).toEqual("red");
  });

  it('should update currentPlayer when insertToken is called multiple times', () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    gameBoardComponent.insertToken(1, 1);
    gameBoardComponent.insertToken(1, 2);
    gameBoardComponent.insertToken(1, 3);
    gameBoardComponent.insertToken(1, 4);
    gameBoardComponent.insertToken(2, 3);
    gameBoardComponent.insertToken(3, 3);
    expect(gameBoardComponent.currentPlayer).toEqual("yellow");
  });
});
