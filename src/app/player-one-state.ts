import { Player } from './player-state';
import { GameboardComponent } from './gameboard/gameboard.component';

export class PlayerOneState extends Player {

    gameboardComponent: GameboardComponent;
    currentPlayer: string = "Player One";

    constructor(gameBoardComponent: GameboardComponent) {
        super(gameBoardComponent);
        this.gameboardComponent = gameBoardComponent;
    }

    updatePlayer(): void {
        this.gameboardComponent.state = this.gameboardComponent.setPlayerTwoState();
    }
}