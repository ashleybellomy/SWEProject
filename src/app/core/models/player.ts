import { Game, Tweens } from "phaser";

// TODO: consider if some of this should just be in Board class
// it feels like player class should just be player data, not physics
export class Player {

    constructor(jobTitle: string, startingSalary: number, startingCash: number) {
        this.jobTitle = jobTitle;
        this.monthlySalary = startingSalary;
        this.cash = startingCash;
    }

    public jobTitle: string;
    public monthlySalary: number;
    public cash: number;
    private location: Phaser.Math.Vector2;
    //TODO: this doesn't really belong here, move or delete
    private scene: Phaser.Scene;
    private phys: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    
    //TODO: some of this should just happen in the constructor
    setLocation(scene: Phaser.Scene, x: number, y: number, squareSize: number) {
        this.scene = scene;

        this.phys = this.scene.physics.add.sprite(x, y, "player");
        this.phys.setDisplaySize(squareSize, squareSize);
        
        this.location = new Phaser.Math.Vector2(x, y);
    }

    public updateLocation(x: number, y: number) {
        console.log('update ' + x + ' ' + y);
        this.location.x = x;
        this.location.y = y;
        this.scene.physics.moveToObject(this.phys, this.location, 500);
    }

    update() {
        var distance = Phaser.Math.Distance.Between(this.phys.x, this.phys.y, this.location.x, this.location.y);

        if (this.phys.body.speed > 0)
        {
            //  4 is our distance tolerance, i.e. how close the source can get to the target
            //  before it is considered as being there. The faster it moves, the more tolerance is required.
            if (distance < 4)
            {
                this.phys.body.reset(this.location.x, this.location.y);
            }
        }
    }
}
