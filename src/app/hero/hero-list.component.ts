import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  heroes: Observable<Hero[]>;
  selectedHero!: Hero;

  constructor(private service: HeroService, private router: Router){
   this.heroes = this.service.getHeroes();
  }

  onSelect(h:Hero){
    console.log('xx',h)
    this.selectedHero = h;
    this.router.navigate(['/heroes/', h.id])
  }

}
