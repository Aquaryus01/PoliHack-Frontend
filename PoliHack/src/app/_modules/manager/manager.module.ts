import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortComponent } from './sort/sort.component';

const appRoutes: Routes = [
  { path: 'dashboard-pm', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SortComponent,
  ]
})
export class ManagerModule { }
