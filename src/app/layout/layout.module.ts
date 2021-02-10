import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesModule } from '../core/components/services/services.module';
import { ServicesComponent } from '../core/components/services/services/services.component';
const routes: Routes  = [
  {
    path: '',
    component: ServicesComponent
  }
]
@NgModule({
  declarations: [LayoutComponent, SidenavComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ServicesModule
  ],
  exports: [
    LayoutComponent, SidenavComponent
  ]
})
export class LayoutModule { }
