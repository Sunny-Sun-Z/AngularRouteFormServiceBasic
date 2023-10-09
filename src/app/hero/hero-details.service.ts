import { Injectable } from '@angular/core';
import { HeroService } from '../model/hero.service';
import { Observable, map } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailsService {

  constructor(private service: HeroService) { }

  getHero(id: string | number): Observable<Hero|null> {
    if (typeof (id) === 'string')
      id = parseInt(id);

    return this.service.getHero(id).pipe(
      map(hero => hero? Object.assign({}, hero) : null
      )
    )
  }

  saveHero(hero: Hero){
    return this.service.updateHero(hero);
  }

}
