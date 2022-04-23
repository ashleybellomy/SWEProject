import { Budget } from "./budget";
import { Player } from "./player";


export class GameData {
    public player: Player;
    public budget: Budget;

    constructor(player: Player, budget: Budget) {
        this.player = player;
        this.budget = budget;
    }
}