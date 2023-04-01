import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { JobsComponent } from 'src/app/components/jobs/jobs.component';



@NgModule({
  declarations: [
    FirstComponent,
    JobsComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
