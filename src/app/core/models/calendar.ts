export class Calendar extends Phaser.GameObjects.Grid {
    
    private dateNumXPos = 5;
    private dateNumYPos = 5;
    private currentDate;

    constructor(scene: Phaser.Scene, cellWidth: number, cellColor: number = 0x057605, currentDate = new Date()) {
        super(scene, 400, 300, cellWidth * 7, cellWidth * 5, cellWidth, cellWidth, cellColor);
        this.currentDate = currentDate;


        scene.add.existing(this);
     
        
        this.plotDays(scene);
    }

    plotDays(scene: Phaser.Scene) {
        var bounds = this.getBounds();
        console.log('current date', this.currentDate);

        var daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        console.log('days in month', daysInMonth);

        var cellCounter = 0;
        while (cellCounter < daysInMonth) {
            for (let row = 0; row < 5; row++) {
                let col = 0;
                while (col < 7 && cellCounter < daysInMonth) {
                    scene.add.text(bounds.x + (col * this.cellWidth) + this.dateNumXPos, bounds.y + (row * this.cellWidth) + this.dateNumYPos, (cellCounter + 1).toString());
                    cellCounter++;
                    col++;
                }
            }
        }
    }
}