import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { ManagerGuard } from './manager.guard';

const appRoutes: Routes = [
  {
    path: 'dashboard-pm', 
    component: DummyComponent,
    canActivate: [ ManagerGuard ],
    children: [
      { path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    DashboardComponent,
    DummyComponent
  ]
})
export class ManagerModule { }
