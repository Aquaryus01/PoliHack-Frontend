import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ManagerModule } from './_modules/manager/manager.module';
import { AuthModule } from './_modules/auth/auth.module';
import { WorkerModule } from './_modules/worker/worker.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AuthModule,
    WorkerModule,
    ManagerModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
