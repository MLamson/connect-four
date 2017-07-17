/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GameboardComponent } from "./gameboard.component";
import { CheckWinOrTie } from "../check-win-or-tie";

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

describe("checkWin and gameIsTied", () => {
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
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "yellow"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeTruthy();
  });

  it("should check for four in a row", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeFalsy();
  });

  it("should return true for four in a row horizontal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeTruthy();
  });

  it("should return false for four in a row horizontal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeFalsy();
  });

  it("should return true for four in a row vertical", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "red", "red", "red", "red"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeTruthy();
  });

  it("should return true for four in a row diagonal", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "red"],
      ["open", "open", "open", "open", "red", "open"],
      ["open", "open", "open", "red", "open", "open"],
      ["open", "open", "red", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeTruthy();
  });

  it("should return true for four in a row diagonal bottom left to top right", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinner: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "yellow", "open", "open", "open"],
      ["open", "open", "open", "yellow", "open", "open"],
      ["open", "open", "open", "open", "yellow", "open"],
      ["open", "open", "open", "open", "open", "yellow"]
    ];
    expect(checkWinner.checkWin(gameboardComponent.gameboard)).toBeTruthy();
  });

  it("should set state to WonState if four in a row", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinOrTie: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "yellow", "open", "open", "open"],
      ["open", "open", "open", "yellow", "open", "open"],
      ["open", "open", "open", "open", "yellow", "open"],
      ["open", "open", "open", "open", "open", "yellow"]
    ];
    let result: boolean = checkWinOrTie.checkWin(gameboardComponent.gameboard);
    expect(result).toEqual(true);
  });

  it("should set state to tieState when all spaces are filled and no one has won", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let checkWinOrTie: CheckWinOrTie = new CheckWinOrTie();
    gameboardComponent.gameboard = [
      ["yellow", "yellow", "yellow", "red", "red", "red"],
      ["red", "red", "red", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow", "red", "red", "red"],
      ["red", "red", "red", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow", "red", "red", "red"],
      ["red", "red", "red", "yellow", "yellow", "yellow"],
      ["yellow", "yellow", "yellow", "red", "red", "red"]
    ];
    let result: boolean = checkWinOrTie.checkTie(gameboardComponent.gameboard);
    expect(result).toEqual(true);
  });
});

describe("placePieceInLowestOpenSpace", () => {
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

  it("should place token in lowest open space", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["open", "open", "open", "open", "open", "Player Two"],
      ["open", "open", "open", "open", "open", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.placePiece(1, 1);
    expect(gameboardComponent.gameboard).toEqual([
      ["open", "open", "open", "open", "open", "Player Two"],
      ["open", "open", "open", "open", "Player One", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ]);
  });

  it("should not place a token if invalid column or row", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["open", "open", "open", "open", "open", "Player Two"],
      ["open", "open", "open", "open", "open", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.placePiece(0, 5);
    expect(gameboardComponent.gameboard).toEqual([
      ["open", "open", "open", "open", "open", "Player Two"],
      ["open", "open", "open", "open", "open", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ]);
  });

  it("should not place a token if invalid column or row", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["open", "open", "open", "open", "open", "Player Two"],
      ["open", "open", "open", "open", "open", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.placePiece(6, 8);
    expect(gameboardComponent.gameboard).toEqual([
      ["open", "open", "open", "open", "open", "Player Two"],
      ["open", "open", "open", "open", "open", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ]);
  });
});
describe("player state abstract class", () => {
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

  it("should set state to WonState if there is a winner", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["open", "open", "open", "Player Two", "Player Two", "Player Two"],
      ["open", "open", "open", "Player One", "Player One", "Player One"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.placePiece(1, 2);
    expect(gameboardComponent.state).toEqual(gameboardComponent.wonState);
  });

  it("should set state to TieState if no winner", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["Player One", "Player One", "Player One", "Player Two", "Player Two", "Player Two"],
      ["Player Two", "Player Two", "Player Two", "Player One", "Player One", "Player One"],
      ["Player One", "Player One", "Player One", "Player Two", "Player Two", "Player Two"],
      ["Player Two", "Player Two", "Player Two", "Player One", "Player One", "Player One"],
      ["Player One", "Player One", "Player One", "Player Two", "Player Two", "Player Two"],
      ["Player Two", "Player Two", "Player Two", "Player One", "Player One", "Player One"],
      ["open", "Player Two", "Player One", "Player Two", "Player One", "Player Two"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.placePiece(6, 0);
    expect(gameboardComponent.state).toEqual(gameboardComponent.tieState);
  });
});
