import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class WorkerModule { }
