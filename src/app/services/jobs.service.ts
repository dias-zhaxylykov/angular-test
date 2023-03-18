import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../types/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private host = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get(this.host + '/jobs');
  }

  getJob(id: number) {
    return this.http.get(this.host + '/jobs/' + id);
  }

  postJob(job: Job) {
    return this.http.post(this.host + '/jobs', job);
  }

  putJob(id: number, job: Job) {
    return this.http.put(this.host + '/jobs/' + id, job);
  }

  deleteJob(id: number) {
    return this.http.delete(this.host + '/jobs/' + id);
  }
}
