import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'jobs', loadChildren: () => import('./pages/first/first.module').then(m => m.FirstModule) },
  { path: 'jobs/new', loadChildren: () => import('./pages/second/second.module').then(m => m.SecondModule) },
  { path: 'jobs/:id', loadChildren: () => import('./pages/third/third.module').then(m => m.ThirdModule) },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: '**', redirectTo: '/jobs', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { 
        // paramsInheritanceStrategy: 'always',
        // enableTracing: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
