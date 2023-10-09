import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroModule } from './hero/hero.module';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'heroes', loadChildren: ()=> import('./hero/hero.module').then(()=>HeroModule)},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
