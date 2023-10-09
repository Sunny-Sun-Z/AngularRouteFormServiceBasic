import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
