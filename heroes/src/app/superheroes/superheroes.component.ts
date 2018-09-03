import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {
  // Ultimately program is still defining a class that operates like an html element
  selectedHero: Hero;
  allHeroes: Hero[];

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  // Creating method that retrieves data based on service method.  
  getHeroes(): void {
    this.heroService.getHeroes()
    // subscribe names returned data...or array of hero data...and then its used as a variable
    .subscribe(heroes => this.allHeroes = heroes);
  }

  // Directing compoent to perform method on creation.
  ngOnInit() {
    this.getHeroes();
  }



}
