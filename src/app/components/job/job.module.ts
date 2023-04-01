import { NgModule } from "@angular/core";
import { JobComponent } from "./job.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        JobComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        JobComponent
    ]
})
export class JobModule { }