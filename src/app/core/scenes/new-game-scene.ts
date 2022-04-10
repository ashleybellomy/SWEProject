import { MainScene } from "./main-scene";

export class NewGameScene extends Phaser.Scene {
    playButton: Phaser.GameObjects.Sprite;

    constructor() {
        super({key: "newgame"});
    }

    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.playButton = this.add.sprite(screenCenterX, screenCenterY, 'playbutton')
            .setOrigin(0.5)
            .setScale(0.5, 0.5)
            .setInteractive();
        this.playButton.on('pointerup', () => {
            this.scene.start('main');
            console.log(this.scene.manager);
        });
    }

    preload() {
        this.load.image('playbutton', location.href + 'assets/sprites/play-button.png');
    }

    override update() {

    }
}