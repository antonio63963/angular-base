import { Component, EventEmitter, NgModule, Output } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:  `<h1>HONO</h1>`
})
export class Counter {
  count = 0;
  @Output() counterEmmiter = new EventEmitter<number>()
  increment() {
    this.count++;
    this.counterEmmiter.emit(this.count);
  }
  decrement() {
    this.count--;
  }
}