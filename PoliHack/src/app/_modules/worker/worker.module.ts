import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { WorkerGuard } from './worker.guard';
import { NavbarComponent } from '../worker/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: 'dashboard', 
    component: DummyComponent,
    canActivate: [WorkerGuard ],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent}
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
    NavbarComponent,
    ProfileComponent
  ]
})
export class WorkerModule { }
