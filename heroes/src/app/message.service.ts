import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // Creating an empty array of type string
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  // Clearing out array of messages
  clear(){
    this.messages = []
  }
}


// This message service will be injected into heroService
