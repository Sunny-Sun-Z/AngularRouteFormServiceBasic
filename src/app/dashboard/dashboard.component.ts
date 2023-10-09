import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes: Hero[]=[];
  constructor(private service: HeroService, private router: Router){}

  ngOnInit(): void {
    this.service.getHeroes().subscribe(
      heroes=> this.heroes = heroes.slice(1,5)
    );
  }

  onSelect(hero:Hero){
    console.log('id:',hero.id)
    const url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }

}
