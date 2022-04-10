import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { timeout } from 'rxjs';
import { MainScene } from '../core/scenes/main-scene';
import { NewGameScene } from '../core/scenes/new-game-scene';
import { GameEngineService } from '../core/services/game-engine.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  engine: GameEngineService;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ NewGameScene, MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    };
    this.phaserGame = new Phaser.Game(this.config);
  }
  ngOnInit(): void {
  
  }
}
