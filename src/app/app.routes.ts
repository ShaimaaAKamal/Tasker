import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './Components/onBoarding/welcome/welcome.component';
import { BoardingComponent } from './Components/onBoarding/boarding/boarding.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  {path:"",redirectTo:"start",pathMatch:"full"},
  {path:'start',component:BoardingComponent},
{ path: 'home', component: HomeComponent },

];
