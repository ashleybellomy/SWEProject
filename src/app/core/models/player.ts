import { Job } from "./job";

export class Player {

    constructor(job: Job, startingCash: number) {
        this.job = job;
        this.cash = startingCash;
    }

    public job: Job;
    public cash: number;
}
