export class Job {

    constructor(title: string, company: string, monthlySalary: number) {
        this.title = title;
        this.company = company;
        this.monthlySalary = monthlySalary;
    }

    public title: string;
    public company: string;
    public monthlySalary: number;
}