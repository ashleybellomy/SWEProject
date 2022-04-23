import { GlobalConstants } from "../global-constants";
import { Budget } from "../models/budget";
import { GameData } from "../models/game-data";
import { Player } from "../models/player";
import { ButtonLoaderService } from "../services/button-loader.service";

export class BudgetScene extends Phaser.Scene {

    totalIncome: number;
    budget: Budget;
    player: Player;

    init(player: Player) {
        this.player = player;
        console.log("player in budget scene", this.player);
        this.totalIncome = this.player.job.monthlySalary;
        this.budget = new Budget(this.totalIncome);
    }

    getBudgetBalance():number {
        return this.totalIncome - this.budget.getTotal();
    }

    constructor() {
        super({key: "budget"});
    }

    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        let continueButton = this.add.sprite(screenCenterX, this.cameras.main.worldView.y + this.cameras.main.height - 75, "btn-Continue")
            .setTint(GlobalConstants.ButtonTint)
            .setInteractive({cursor: GlobalConstants.ButtonCursor})
            .setScale(0.5, 0.5)
            .on('pointerup', ()=> {
                this.scene.start('main', new GameData(this.player, this.budget));
            });
            continueButton.on('pointerover', () => {
                continueButton.setTint(GlobalConstants.ButtonHoverTint);
            });
            continueButton.on('pointerout', () => {
                continueButton.setTint(GlobalConstants.ButtonTint);
            });

        this.add.text(screenCenterX, 50, "Create Your Budget")
            .setAlign("center")
            .setFontFamily(GlobalConstants.TextFont)
            .setFontSize(64)
            .setOrigin(0.5, 0.5);

        let balanceText = this.add.text(0, 0,
             `Budget Balance: $${this.getBudgetBalance()}`)
            .setAlign("center")
            .setFontFamily(GlobalConstants.TextFont);

        let container = this.add.container(0, 0);
        // This is so stupid
        for (let i = 0; i < this.budget.categories.length; i++) {
            let category = this.budget.categories[i];
            let categoryText = this.add.text(0, i * 50, category.name + ": $" + category.amount)
                .setAlign("left")
                .setFontFamily(GlobalConstants.TextFont)
                .setDepth(100);
            container.add(categoryText);

            let downButton = this.add.sprite(300, i * 50, "btn-Down Square")
                .setTint(GlobalConstants.ButtonTint)
                .setInteractive({cursor: GlobalConstants.ButtonCursor})
                .setDisplaySize(30, 30)
                .on('pointerup', () => {
                    category.decrease();
                    categoryText.text = category.name + ": $" + category.amount;
                    categoryText.updateText();
                    let balance = this.getBudgetBalance();
                    balanceText.text = `Budget Balance: $${balance}`;
                    if (balance < 0) {
                        balanceText.setTint(0xFF0000);
                        continueButton.setVisible(false);
                    }
                    else if (balance == 0) {
                        balanceText.setTint(0x00FF00);
                        continueButton.setVisible(true);
                    }
                    else  {
                        balanceText.setTint(0xFFFFFF);
                        continueButton.setVisible(false);
                    }

                    balanceText.updateText();
                });
                downButton.on('pointerover', () => {
                    downButton.setTint(GlobalConstants.ButtonHoverTint);
                });
                downButton.on('pointerout', () => {
                    downButton.setTint(GlobalConstants.ButtonTint);
                });
            container.add(downButton);
            let upButton = this.add.sprite(350, i * 50, "btn-Up Square")
                .setTint(GlobalConstants.ButtonTint)
                .setInteractive({cursor: GlobalConstants.ButtonCursor})
                .setDisplaySize(30, 30)
                .on('pointerup', () => {
                    category.increase();
                    categoryText.text = category.name + ": $" + category.amount;
                    categoryText.updateText();
                    let balance = this.getBudgetBalance();
                    balanceText.text = `Budget Balance: $${balance}`;
                    if (balance < 0) {
                        balanceText.setTint(0xFF0000);
                        continueButton.setVisible(false);
                    }
                    else if (balance == 0) {
                        balanceText.setTint(0x00FF00);
                        continueButton.setVisible(true);
                    }
                    else  {
                        balanceText.setTint(0xFFFFFF);
                        continueButton.setVisible(false);
                    }

                    balanceText.updateText();
                });
                upButton.on('pointerover', () => {
                    upButton.setTint(GlobalConstants.ButtonHoverTint);
                });
                upButton.on('pointerout', () => {
                    upButton.setTint(GlobalConstants.ButtonTint);
                });
            container.add(upButton);
        }
        balanceText.x = 0;
        balanceText.y = (this.budget.categories.length) * 50;
        container.add(balanceText);

        // This is ridiculous but whatever. I am done trying to center this thing in a dynamic way
        container.x = screenCenterX - 190;
        container.y = screenCenterY - (50 * this.budget.categories.length) / 2;
    }

    preload() {
        let buttonLoadService = new ButtonLoaderService();
        buttonLoadService.loadSquareButton("Up Square", this);
        buttonLoadService.loadSquareButton("Down Square", this);
        buttonLoadService.loadLargeButton("Continue", this);
    }

    override update() {

    }
}