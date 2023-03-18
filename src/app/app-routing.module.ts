import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';

const routes: Routes = [
  { path: 'jobs', component: FirstComponent },
  { path: 'jobs/new', component: SecondComponent },
  { path: 'jobs/:id', component: ThirdComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: '**', redirectTo: '/jobs', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
