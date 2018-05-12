import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DummyComponent } from './dummy/dummy.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: DummyComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    DummyComponent
  ]
})
export class AuthModule { }
