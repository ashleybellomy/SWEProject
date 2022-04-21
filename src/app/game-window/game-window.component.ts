import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { IntroScene } from '../core/scenes/intro-scene';
import { MainScene } from '../core/scenes/main-scene';
import { NewGameScene } from '../core/scenes/new-game-scene';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 720,
      width: 1280,
      scene: [ NewGameScene, IntroScene, MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      },
      scale: {
        parent: 'gamewindow',
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
      }
    };
    this.phaserGame = new Phaser.Game(this.config);
  }
  ngOnInit(): void {
  
  }
}
