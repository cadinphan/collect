import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero : Hero = {
    //idHero : 1,
    //nameHero : 'Iron Man',
  //};

  constructor(private heroService : HeroService) { }

  //heroes = HEROES;
  heroes : Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(h => this.heroes = h)
  }

  ngOnInit() {
    this.getHeroes();
  }

}
