import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES_LIST } from "./hero_list";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // Creating functions in side of scope does do require full declaration.  This format is synchoronous and not an observable that will return a promise that captures changes to DB data or dataset
  getHeroes2(): Hero[]{
    return HEROES_LIST;
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes...
    this.messageService.add('HeroService: fetched heroes');   // came before constructor and still fine
    return of(HEROES_LIST);
  }

  // Injecting message service into this service to be able to see notes and information from string array
  // This service is private but the messages component service is public
  constructor(private messageService: MessageService) { }
}
