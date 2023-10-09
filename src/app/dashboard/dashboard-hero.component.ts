import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-dashboard-hero',
  template: `
    <button (click)="onClick()">{{hero.name}}</button>
  `,
  styles: [
  ]
})
export class DashboardHeroComponent {
@Input() hero!:Hero;
@Output() selected = new EventEmitter();

onClick(){
  console.log('aaaa')
  this.selected.emit(this.hero);
}

}
