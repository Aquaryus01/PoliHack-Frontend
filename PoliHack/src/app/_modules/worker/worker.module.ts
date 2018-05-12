import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { WorkerGuard } from './worker.guard';

const appRoutes: Routes = [
  {
    path: 'dashboard', 
    component: DummyComponent,
    canActivate: [WorkerGuard ],
    children: [
      { path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    DashboardComponent,
    DummyComponent,
  ]
})
export class WorkerModule { }
