import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroDetailsService } from './hero-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers:  [ HeroDetailsService ]
})
export default class HeroDetailComponent implements OnInit {
  hero!: Hero;
  constructor(private service: HeroDetailsService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      para => this.getHero(para.get('id'))
    )
  }

  private getHero(id: string | null): void {
    
    if (!id) {
      this.hero = { id: 0, name: '' };
      return;
    }
    
    this.service.getHero(id).subscribe(hero => {
      console.log('xxxx',hero)
      if (hero)
        this.hero = hero;
      else
        this.gotoList();
    }
    )
  }
  gotoList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  save(hero: Hero): void{
    this.service.saveHero(hero).subscribe(()=> this.gotoList());
    // console.log('yyybbb', h)
    //this.router.navigateByUrl('/heroes');
  }

  cancel(){
    this.gotoList();
  }
}
