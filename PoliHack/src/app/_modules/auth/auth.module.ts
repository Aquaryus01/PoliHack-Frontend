import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DummyComponent } from './dummy/dummy.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: DummyComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    DummyComponent
  ]
})
export class AuthModule { }
