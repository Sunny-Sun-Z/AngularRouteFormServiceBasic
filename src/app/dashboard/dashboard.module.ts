import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroModule } from '../hero/hero.module';

const routes : Routes = [
  {path: 'dashboard', component:DashboardComponent}
]


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeroComponent,
    
  ],
  imports: [
    CommonModule,
    HeroModule,
    RouterModule.forChild(routes),
   
  ]
})
export class DashboardModule { }
