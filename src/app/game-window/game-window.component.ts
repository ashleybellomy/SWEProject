import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { Player } from '../core/models/player';
import { Calendar } from '../core/models/calendar';
import { GameEngineService } from '../core/services/game-engine.service';
import { Grid } from 'matter';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor(private gameEngine: GameEngineService) {
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
  }

  ngOnInit(): void {

  }

}

class MainScene extends Phaser.Scene {
  calendarView: Calendar;
  constructor() {
    super({ key: 'main '});
  }

  create() {
    //this.add.image(400, 300, 'sky');

    var date = new Date("2022/08/02");
    this.calendarView = new Calendar(this, 400, 300);

    console.log('game calendar', this.calendarView);

    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);
  }

  initPlayer(player: Player) {
    this.add.text(0, 0, "Cash: " + player.cash,);
    this.add.text(0, 10, "Job: " + player.jobTitle);
    this.add.text(0, 20, "Monthly Salary: " + player.monthlySalary);
  }

  preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }

  override update() {
  
  }
}