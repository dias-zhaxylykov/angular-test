import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { JobModule } from 'src/app/components/job/job.module';



@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    JobModule
  ]
})
export class SecondModule { }
