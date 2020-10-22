import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './pages/nopagefound/nopafefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  //PagesRoutingModule /dasboard
  //AuthRoutingModule  /Auth 
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
