import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortComponent } from './sort/sort.component';
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
    NavbarComponent,
    SortComponent,
    DummyComponent
  ]
})
export class ManagerModule { }
