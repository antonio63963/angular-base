import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Observable,
  Observer,
  Subscriber,
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent implements OnInit {
  @ViewChild('searchInput', { static: false }) refSearch:
    | ElementRef
    | undefined;
  search$?: Observable<Event>;
  stop$?: Observable<Event>;

  constructor() {}

  ngOnInit(): void {
    // this.search$ = new Observable((observer) => {
    //  const input = document.getElementById('inp1');
    //  if(!input) {
    //   observer.error('No such an element on the page!')
    //  }
    //  input?.addEventListener('input', event => {
    //   observer.next(event);
    //  })
    // });

    // BETTER THEN ^
    this.search$ = fromEvent<Event>(document.getElementById('inp1')!, 'input');
    this.stop$ = fromEvent<Event>(document.getElementById('stop')!, 'click');

    const searchSubscribtion = this.search$.pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      map(value => value.length > 3 ? value : ''),
      distinctUntilChanged(),
      takeUntil(this.stop$) // do while stop$ start works!
    ).subscribe({
      next: (value) => console.log('output: ', value)
    })
    // subscribtion.unsubscribe()

    // const stopSubscription = this.stop$.subscribe(() => {
    //   console.log('unsub btn')
    //   stopSubscription.unsubscribe();
    // }) //// WOW! after subscribe we a waiting for event 'click' from button when it hapens unsubscrive executes
  }
}
