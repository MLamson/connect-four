/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { GameboardComponent } from "./gameboard.component";
import { WonState } from "../won-state";
import { CheckWin } from "../check-win";

describe("GameboardComponent", () => {
  let component: GameboardComponent;
  let fixture: ComponentFixture<GameboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GameboardComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create GameBoard", () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    expect(gameBoardComponent).toEqual(new GameboardComponent());
  });

  it("should create GameBoard with empty board", () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    let gameBoard: any = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(gameBoard).toEqual(gameBoardComponent.gameboard);
  });

  it("should reset GameBoard with empty board", () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    let initialGameBoard: any = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["yellow", "red", "open", "open", "open", "open"]
    ];
    gameBoardComponent.gameboard = initialGameBoard;
    gameBoardComponent.resetGame();
    let restartedGameBoard: any = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(gameBoardComponent.gameboard).toEqual(restartedGameBoard);
  });

  it("should create GameBoard with currentPlayer set", () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    expect(gameBoardComponent.state.currentPlayer).toEqual("Player One");
  });

  it("should update currentPlayer when in hasTokenState", () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    gameBoardComponent.placePiece(1, 1);
    expect(gameBoardComponent.state.currentPlayer).toEqual("Player Two");
  });

  it("should update currentPlayer when insertToken is called multiple times", () => {
    let gameBoardComponent: GameboardComponent = new GameboardComponent();
    gameBoardComponent.placePiece(0, 5);
    gameBoardComponent.placePiece(0, 4);
    gameBoardComponent.placePiece(0, 3);
    gameBoardComponent.placePiece(0, 2);
    gameBoardComponent.placePiece(0, 1);
    gameBoardComponent.placePiece(0, 0);
    expect(gameBoardComponent.state.currentPlayer).toEqual("Player One");
  });

  it("should not register click if clicking on a space already having a token", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.placePiece(0, 5);
    expect(gameboardComponent.state.currentPlayer).toEqual("Player One");
  });
});

describe("checkWin and checkTie", () => {
  let component: GameboardComponent;
  let fixture: ComponentFixture<GameboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GameboardComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should return true for four in a row horizontal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent)).toBeTruthy();
  });

  it("should check for four in a row", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    expect(checkWinner.checkWin(gameboardComponent)).toBeFalsy();
  });

  it("should return true for four in a row horizontal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent)).toBeTruthy();
  });

  it("should return false for four in a row horizontal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent)).toBeFalsy();
  });

  it("should return true for four in a row vertical", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "red", "red", "red", "red"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent)).toBeTruthy();
  });

  it("should return true for four in a row diagonal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "red", "open"],
      ["open", "open", "open", "red", "open", "open"],
      ["open", "open", "red", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent)).toBeTruthy();
  });

  it("should return true for four in a row diagonal bottom left to top right", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "yellow", "open", "open", "open"],
      ["open", "open", "open", "yellow", "open", "open"],
      ["open", "open", "open", "open", "yellow", "open"],
      ["open", "open", "open", "open", "open", "yellow"]
    ];
    expect(checkWinner.checkWin(gameboardComponent)).toBeTruthy();
  });

  it("should set state to WonState if four in a row", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWin = new CheckWin();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "yellow", "open", "open", "open"],
      ["open", "open", "open", "yellow", "open", "open"],
      ["open", "open", "open", "open", "yellow", "open"],
      ["open", "open", "open", "open", "open", "yellow"]
    ];
    let result: boolean = checkWinner.checkWin(gameboardComponent);
    expect(result).toEqual(true);
  });
  
  it("should set state to tieState when all spaces are filled and no one has won", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    gameboardComponent.gameboard = [
      ["yellow", "yellow", "yellow", "red", "red", "red"],
      ["red", "red", "red", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow", "red", "red", "red"],
      ["red", "red", "red", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow", "red", "red", "red"],
      ["red", "red", "red", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow", "red", "red", "red"]
    ];
    let result: boolean = gameboardComponent.state.checkTie();
    expect(result).toEqual(true);
  });
});
