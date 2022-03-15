import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [ MainScene ],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      }
    };
    this.phaserGame = new Phaser.Game(this.config);
    // type: Phaser.AUTO,
    //     width: 800,
    //     height: 600,
    //     physics: {
    //         default: 'arcade',
    //         arcade: {
    //             gravity: { y: 200 }
    //         }
    //     },
    //     scene: {
    //         preload: preload,
    //         create: create
    //     }
  }

  ngOnInit(): void {
    //this.phaserGame = new Phaser.Game(this.config);
  }

}

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main '});
  }

  create() {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }


  // override update() {
  //   console.log('update method');
  // }
}