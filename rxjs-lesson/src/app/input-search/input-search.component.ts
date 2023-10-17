import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Observable,
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
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

  constructor() {}

  ngOnInit(): void {
    this.search$ = new Observable((observer) => {
     const input = document.getElementById('inp1');
     input?.addEventListener('input', event => {
      observer.next(event);
     })
    });
    
    this.search$.pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe({
      next: (value) => console.log('output: ', value)
    })
  }
}
