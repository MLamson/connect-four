/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameboardComponent } from './gameboard.component';
import {AddGamePiece} from "../add-game-piece";
import {WonState} from "../won-state";

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
    gameBoardComponent.insertToken(0, 5);
    gameBoardComponent.insertToken(0, 4);
    gameBoardComponent.insertToken(0, 3);
    gameBoardComponent.insertToken(0, 2);
    gameBoardComponent.insertToken(0, 1);
    gameBoardComponent.insertToken(0, 0);
    expect(gameBoardComponent.currentPlayer).toEqual("yellow");
  });

  it('should not register click if clicking on a space already having a token', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [["open", "open", "open", "open", "open", "red"],
                                ["open", "open", "open", "open", "open", "yellow"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"],
                                ["open", "open", "open", "open", "open", "open"]];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.insertToken(0, 5);
    expect(gameboardComponent.currentPlayer).toEqual("yellow");
  });

  it('should check for winning player', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.insertToken(0,5);
    expect(gameboardComponent.winningPlayer).toEqual("none");
  });

  it('should check for four in a row', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    expect(gameboardComponent.isFourInARow()).toBeFalsy();
  });

  it('should return true for four in a row horizontal', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "yellow"],
                                    ["open", "open", "open", "open", "open", "yellow"],
                                    ["open", "open", "open", "open", "open", "yellow"],
                                    ["open", "open", "open", "open", "open", "yellow"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"]];
    expect(gameboardComponent.isFourInARow()).toBeTruthy();
  });

  it('should return true for four in a row horizontal', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"]];
    expect(gameboardComponent.isFourInARow()).toBeTruthy();
  });

  it('should return false for four in a row horizontal', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"]];
    expect(gameboardComponent.isFourInARow()).toBeFalsy();
  });

  it('should return true for four in a row vertical', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "red", "red", "red", "red"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"]];
    expect(gameboardComponent.isFourInARow()).toBeTruthy();
  });

  it('should return true for four in a row diagonal', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "red"],
                                    ["open", "open", "open", "open", "red", "open"],
                                    ["open", "open", "open", "red", "open", "open"],
                                    ["open", "open", "red", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"]];
    expect(gameboardComponent.isFourInARow()).toBeTruthy();
  });

  it('should return true for four in a row diagonal bottom left to top right', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "yellow", "open", "open", "open"],
                                    ["open", "open", "open", "yellow", "open", "open"],
                                    ["open", "open", "open", "open", "yellow", "open"],
                                    ["open", "open", "open", "open", "open", "yellow"]];
    expect(gameboardComponent.isFourInARow()).toBeTruthy();
  });

  it('should set state to WonState if four in a row', () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "open", "open", "open", "open"],
                                    ["open", "open", "yellow", "open", "open", "open"],
                                    ["open", "open", "open", "yellow", "open", "open"],
                                    ["open", "open", "open", "open", "yellow", "open"],
                                    ["open", "open", "open", "open", "open", "yellow"]];
    let result: boolean = gameboardComponent.isFourInARow();
    expect(result).toEqual(true);
  });
});
