import { Player } from './player-state';
import { GameboardComponent } from './gameboard/gameboard.component';

export class PlayerOneState extends Player {

    gameBoardComponent: GameboardComponent;

    constructor(gameBoardComponent: GameboardComponent) {
        super();
        this.gameBoardComponent = gameBoardComponent;
    }
}