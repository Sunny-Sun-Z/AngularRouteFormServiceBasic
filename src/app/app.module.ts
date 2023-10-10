import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AboutComponent } from './about/about.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroService } from './model/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroModule } from './hero/hero.module';
import { SharedModule } from './shared/shared.module';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation: false}),
    DashboardModule,
    //HeroModule,
    //FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
