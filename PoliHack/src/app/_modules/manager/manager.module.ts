import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortComponent } from './sort/sort.component';
import { DummyComponent } from './dummy/dummy.component';
import { ManagerGuard } from './manager.guard';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'dashboard-pm', 
    component: DummyComponent,
    canActivate: [ ManagerGuard ],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'add', component: AddProjectComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    // MatAutocompleteModule
  ],
  declarations: [
    DashboardComponent,
    AddProjectComponent,
    NavbarComponent,
    SortComponent,
    DummyComponent
  ]
})
export class ManagerModule { }
