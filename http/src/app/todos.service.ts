import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(500));
  }

  add(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .pipe(delay(500));
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(delay(500));
  }
}
