import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';
import { ThirdRoutingModule } from './third-routing.module';
import { JobModule } from 'src/app/components/job/job.module';



@NgModule({
  declarations: [
    ThirdComponent
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule,
    JobModule
  ]
})
export class ThirdModule { }
