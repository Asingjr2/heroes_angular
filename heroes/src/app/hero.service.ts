import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROES_LIST } from "./hero_list";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes2(): Hero[]{
    /* Creating functions in side of scope does do require full declaration.  
    This format is synchoronous and not an observable that will return a promise.
    */
    return HEROES_LIST;
  }

  getHero(id:number): Observable<Hero> {
    // Function uses find which is built in method to search stream of data
    // Backticks used for string interpolation
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES_LIST.find(hero => hero.id === id ));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');   // came before constructor and still fine
    return of(HEROES_LIST);
  }

  constructor(private messageService: MessageService) { }
  // Injecting message service into this service to be able to see notes and information from string array
}
