import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // Input sign required for internal data or information coming in
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,  // holds information and url paramets and other urls specific information
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // Below information is used to find existing route parameters and also convert to a  number '+'
    const id = +this.route.snapshot.paramMap.get("id"); // creates static image of route info when component initailized
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // Function uses location method to redirect to previous url
    this.location.back();
  }

}
