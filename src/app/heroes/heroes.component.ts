import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
// selector is the CSS selector for this component
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  // a Lifecycle hook - https://angular.io/guide/lifecycle-hooks#oninit
  // A good place for init logic
  ngOnInit() {
  }

}
