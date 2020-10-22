import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbComponent } from './shared/breadcrumbs/breadcrumb.component';
import { NopagefoundComponent } from './pages/nopagefound/nopafefound.component';
import { ProgresComponent } from './pages/progres/progres.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
    //DashboardComponent,
    // BreadcrumbComponent,
    // SidebarComponent,
    // HeaderComponent
    //ProgresComponent,
    //Grafica1Component,
    //PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule, 
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
