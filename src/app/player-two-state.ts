import { Player } from './player-state';
import { GameboardComponent } from './gameboard/gameboard.component';

export class PlayerTwoState extends Player {
    
    gameBoardComponent: GameboardComponent;
    currentPlayer: string = "Player Two";

    constructor(gameBoardComponent: GameboardComponent) {
        super(gameBoardComponent);
        this.gameBoardComponent = gameBoardComponent;
    }

    updatePlayer(): void {
        this.gameBoardComponent.state = this.gameBoardComponent.getPlayerOneState();
    }
}