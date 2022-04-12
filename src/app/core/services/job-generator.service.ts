import { Injectable } from '@angular/core';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobGeneratorService {
    generateRandomJob(): Job {
        // TODO: the idea here is eventually we will have some list of jobs of different tiers
        // and we will randomly choose one to make it interesting each time.
        return new Job('Barista', 'Starbucks', 1200);
    }
}
