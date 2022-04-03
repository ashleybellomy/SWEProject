export class Player {

    constructor(jobTitle: string, startingSalary: number, startingCash: number) {
        this.jobTitle = jobTitle;
        this.monthlySalary = startingSalary;
        this.cash = startingCash;
    }

    public jobTitle: string;
    public monthlySalary: number;
    public cash: number;
}
