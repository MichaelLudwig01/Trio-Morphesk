import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterInfoService {
  static state: string;

  constructor() { }

  static setState(state:string) {
    this.state = state;
  }

  static read() {
    return this.state;
  }
}
