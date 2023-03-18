import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from '../../types/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {

  jobForm = new FormGroup({
      job_number: new FormControl('', Validators.required),
      job_title: new FormControl('', Validators.required),
      job_start_date: new FormControl('', Validators.required),
      job_close_date: new FormControl('', Validators.required),
      experience_required: new FormControl('', Validators.required),
      number_of_openings: new FormControl('', Validators.required),
      job_notes: new FormControl('', Validators.required)
    }
  );

  @Input()
  id!: number;

  @Output()
  saved = new EventEmitter();

  constructor (private jobService: JobsService) {}

  ngOnInit() {
    this.getJob();
  }

  getJob() {
    if (this.id) {
      this.jobService.getJob(this.id).subscribe(
        (data) => {
          this.jobForm.patchValue(data);
        }
      )
    }
  }

  saveJob(){
    if (this.id) {
      let j = <Job><unknown>this.jobForm.value;
      j.id = this.id;
      this.jobService.putJob(this.id, j).subscribe(
        (data) => {
          this.saved.emit();
        }
      )
    } else {
      this.jobService.postJob(<Job><unknown>this.jobForm.value).subscribe(
        (data) => {
          this.saved.emit();
        }
      )
    }
  }

  onSubmit() {
    this.saveJob();
  }

  delete() {
    this.jobService.deleteJob(this.id).subscribe(
      (data) => {
        this.saved.emit();
      }
    )
  }
}
