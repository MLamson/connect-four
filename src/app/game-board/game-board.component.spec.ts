/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameBoardComponent } from './game-board.component';
import {NoTokenState} from "../no-token-state";
import {HasTokenState} from "../has-token-state";

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create GameBoard', () => {
    let gameBoardComponent: GameBoardComponent = new GameBoardComponent();
    expect(gameBoardComponent).toEqual(new GameBoardComponent());
  });

  it('should create GameBoard with initial state of NoToken', () => {
    let gameBoardComponent: GameBoardComponent = new GameBoardComponent();
    let result: NoTokenState = new NoTokenState(gameBoardComponent);
    expect(result).toEqual(gameBoardComponent.state);
  });

  it('should call insertToken function and set state to HasTokenState', () => {
    let gameBoardComponent: GameBoardComponent = new GameBoardComponent();
    gameBoardComponent.insertToken();
    expect(gameBoardComponent.state).toEqual(new HasTokenState(gameBoardComponent));
  });
});
