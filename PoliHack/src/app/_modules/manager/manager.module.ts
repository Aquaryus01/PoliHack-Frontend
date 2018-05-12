import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { SortComponent } from './sort/sort.component';
=======
import { DummyComponent } from './dummy/dummy.component';
import { ManagerGuard } from './manager.guard';
>>>>>>> 14ddd0774e463cabfc434e56894370e12df15064

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
<<<<<<< HEAD
    NavbarComponent,
    SortComponent,
=======
    DummyComponent
>>>>>>> 14ddd0774e463cabfc434e56894370e12df15064
  ]
})
export class ManagerModule { }
