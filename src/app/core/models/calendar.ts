
export class Calendar extends Phaser.GameObjects.Grid {
    
    private dateNumXPos: number = 5;
    private dateNumYPos: number = 5;
    private currentDate: Date;

    constructor(scene: Phaser.Scene, x: number, y: number, cellWidth: number = 72, cellColor: number = 0xFFFFFF, currentDate: Date = new Date()) {
        super(scene, x, y, cellWidth * 7, cellWidth * 5, cellWidth, cellWidth, cellColor);
        this.currentDate = currentDate;
        scene.add.existing(this);

        this.plotDays(scene);
        this.plotHeader(scene);
    }

    plotHeader(scene: Phaser.Scene) {
        let bounds = this.getBounds();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.scene.add.text(bounds.x, bounds.y - 50, "Current Date: " + this.currentDate.toLocaleDateString("en-US"));
    }

    plotDays(scene: Phaser.Scene) {
        let bounds = this.getBounds();
        console.log('current date', this.currentDate);

        let year = this.currentDate.getFullYear();
        let month = this.currentDate.getMonth();
        let currentDay = this.currentDate.getDate();

        // This...just works. Javscript months are 0 indexed so we need 
        // to add 1 here, otherwise we get number of days in last month
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        console.log('days in month', daysInMonth);
        
        // Days of week also 0 based... Sunday - Saturday 0 - 6
        var firstDayOfThisMonth = new Date(year, month, 1);
        var monthWeekDayStart = firstDayOfThisMonth.getDay();

        var cellCounter = 0;
        while (cellCounter < daysInMonth) {
            for (let row = 0; row < 5; row++) {
                let col = row == 0 ? monthWeekDayStart : 0;
                while (col < 7 && cellCounter < daysInMonth) {
                    let xLoc = bounds.x + (col * this.cellWidth) + this.dateNumXPos;
                    let yLoc = bounds.y + (row * this.cellWidth) + this.dateNumYPos
                    let textColor = currentDay == (cellCounter + 1) ? "#FF0000" : "#000000";
                    let style = { color: textColor };
                    scene.add.text(xLoc, yLoc, (cellCounter + 1).toString(), style);
                    cellCounter++;
                    col++;
                }
            }
        }
    }

    public setDate(newDate: Date) {
        this.currentDate = newDate;
        this.plotHeader(this.scene);
        this.plotDays(this.scene)
    }
}