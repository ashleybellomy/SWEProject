export class BudgetCategory {
    public name: string;
    public amount: number;
    
    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    public increase(interval: number = 5):void {
        this.amount += interval;   
    }
    
    public decrease(interval: number = 5):void {
        if ((this.amount - interval) < 0)
            this.amount = 0;
        else    
            this.amount -= interval;
    }
}

export class Budget {
    public categories:BudgetCategory[];

    constructor() {
        this.categories = [];
        this.categories.push(new BudgetCategory("Rent", 500));
        this.categories.push(new BudgetCategory("Rent", 500));
        this.categories.push(new BudgetCategory("Rent", 500));
        this.categories.push(new BudgetCategory("Rent", 500));
        this.categories.push(new BudgetCategory("Rent", 500));
    }

    public getTotal():number {
        if (!this.categories)
            return 0;

        let total = 0;
        for (let i = 0; i < this.categories.length; i++) {
            total += this.categories[i].amount
        }
        return total;
    }
}
