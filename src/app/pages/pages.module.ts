import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProgresComponent } from './progres/progres.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


const routes: Routes = [
  
];

@NgModule({
  declarations: [
    DashboardComponent,
    ProgresComponent,
    Grafica1Component,
    PagesComponent
  ],
   exports:[
    DashboardComponent,
    ProgresComponent,
    Grafica1Component,
    PagesComponent
   ], 
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
