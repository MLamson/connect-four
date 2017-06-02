import { Player } from './player-state';
import { GameboardComponent } from './gameboard/gameboard.component';

export class PlayerTwoState extends Player {
    
    gameBoardComponent: GameboardComponent;
     currentPlayer: string = "Player Two";

    constructor(gameBoardComponent: GameboardComponent) {
        super();
        this.gameBoardComponent = gameBoardComponent;
    }
}