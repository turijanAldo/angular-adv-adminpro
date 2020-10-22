import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgresComponent } from './progres/progres.component';


const routes : Routes = [
    {
        path:'dashboard',component:PagesComponent,
        children:[
          {path:'', component : DashboardComponent},
          {path:'progres', component: ProgresComponent},
          {path:'grafica1',component: Grafica1Component},
          {path:'', redirectTo:'/dashboard', pathMatch:'full'},
        ]
      }
]

@NgModule({
    declarations: [
      
    ],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[
      RouterModule
    ]
  
  })
  export class PagesRoutingModule { }