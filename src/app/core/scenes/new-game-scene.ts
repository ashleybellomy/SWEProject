import { GlobalConstants } from "../global-constants";
import { ButtonLoaderService } from "../services/button-loader.service";

export class NewGameScene extends Phaser.Scene {

    constructor() {
        super({key: "newgame"});
    }

    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        let newGameBtn = this.add.sprite(screenCenterX, screenCenterY, 'btn-New game')
            .setOrigin(0.5)
            .setTint(GlobalConstants.ButtonTint)
            .setScale(0.5, 0.5)
            .setInteractive({cursor: GlobalConstants.ButtonCursor})
            .on('pointerup', () => {
                this.scene.start('intro');
            });

        newGameBtn.on('pointerover', () => {
            // TOOD: figure out how to chain this to the initialization
            // ...cant figure it out without using 'this' but its scoped 
            // to the scene, not the button
            newGameBtn.setTint(GlobalConstants.ButtonHoverTint);
        });
        newGameBtn.on('pointerout', () => {
            newGameBtn.setTint(GlobalConstants.ButtonTint);
        });
    }

    preload() {
        let buttonLoadService = new ButtonLoaderService();
        buttonLoadService.loadLargeButton("New game", this)
    }

    override update() {

    }
}