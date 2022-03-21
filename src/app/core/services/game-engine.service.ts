import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  player: Player;

  constructor() { 
    // TODO: consider if we want game window to initialize this explicitly
    this.player = new Player("Dog Walker", 1200, 1000);
    console.log("player initialized", this.player);
    alert("player initialized " + JSON.stringify(this.player));
  }

}
