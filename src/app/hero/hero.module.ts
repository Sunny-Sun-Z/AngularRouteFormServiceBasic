import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../model/hero.service';
import { HeroDetailsService } from './hero-details.service';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    
  ],
  providers:[]
})
export class HeroModule { }
