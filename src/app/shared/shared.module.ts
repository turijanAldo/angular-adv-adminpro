import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumbs/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
