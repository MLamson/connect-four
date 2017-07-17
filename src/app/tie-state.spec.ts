import {GameboardComponent} from "./gameboard/gameboard.component";
import {ComponentFixture, async, TestBed} from "@angular/core/testing";

describe("tie state", () => {
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

  it("should alert when trying to place a piece after game over WITH ALERT", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    spyOn(window, "alert");
    gameboardComponent.tieState.placePiece();
    expect(window.alert).toHaveBeenCalled();
  });

  it("should reset game if resetGame method called", () => {
    let gameboardComponent: GameboardComponent = new GameboardComponent();
    let currentGameboard: any = [
      ["Player One", "Player One", "Player One", "Player Two", "Player Two", "Player Two"],
      ["Player Two", "Player Two", "Player Two", "Player One", "Player One", "Player One"],
      ["Player One", "Player One", "Player One", "Player Two", "Player Two", "Player Two"],
      ["Player Two", "Player Two", "Player Two", "Player One", "Player One", "Player One"],
      ["Player One", "Player One", "Player One", "Player Two", "Player Two", "Player Two"],
      ["Player Two", "Player Two", "Player Two", "Player One", "Player One", "Player One"],
      ["Player One", "Player Two", "Player One", "Player Two", "Player One", "Player Two"]
    ];
    gameboardComponent.gameboard = currentGameboard;
    gameboardComponent.resetGame();
    expect(gameboardComponent.gameboard).toEqual([
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"],
      ["open", "open", "open", "open", "open", "open"]
    ]);
    expect(gameboardComponent.tieState.resetGame()).toHaveBeenCalled;
  });
});
