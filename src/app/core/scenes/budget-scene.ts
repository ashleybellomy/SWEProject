import { GlobalConstants } from "../global-constants";
import { Budget } from "../models/budget";

export class BudgetScene extends Phaser.Scene {

    constructor() {
        super({key: "budget"});
    }

    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // let newGameBtn = this.add.sprite(screenCenterX, screenCenterY, 'btn-New game')
        //     .setOrigin(0.5)
        //     .setTint(GlobalConstants.ButtonTint)
        //     .setScale(0.5, 0.5)
        //     .setInteractive({cursor: GlobalConstants.ButtonCursor})
        //     .on('pointerup', () => {
        //         this.scene.start('intro');
        //     });

        // newGameBtn.on('pointerover', () => {
        //     // TOOD: figure out how to chain this to the initialization
        //     // ...cant figure it out without using 'this' but its scoped 
        //     // to the scene, not the button
        //     newGameBtn.setTint(GlobalConstants.ButtonHoverTint);
        // });
        // newGameBtn.on('pointerout', () => {
        //     newGameBtn.setTint(GlobalConstants.ButtonTint);
        // });
        // let text = this.add.text(screenCenterX, screenCenterY, "This is where budgets would go")
        //     .setAlign("left")
        //     .setFontFamily(GlobalConstants.TextFont)
        //     .setWordWrapWidth(this.cameras.main.width / 2)
        //     .setDepth(100);

        let budget = new Budget();
        for (let i = 0; i < budget.categories.length; i++) {
            let category = budget.categories[i];
            this.add.text(screenCenterX, screenCenterY + (i * 50), category.name + ": $" + category.amount)
                .setAlign("left")
                .setFontFamily(GlobalConstants.TextFont)
                .setDepth(100);
        }
    }

    preload() {
        // let buttonLoadService = new ButtonLoaderService();
        // buttonLoadService.loadButton("New game", this)
    }

    override update() {

    }
}