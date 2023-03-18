import { Component } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/types/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  jobs: Job[] = [];

  constructor (private jobsService: JobsService) {

  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobsService.getJobs().subscribe(
      (data) => {
        this.jobs = <Job[]>data;
      }
    )
  }


}
