import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(
        delay(500),
        catchError((err) => {
          console.log('Error: ', err);
          return throwError(() => err);
        })
      );
  }

  add(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .pipe(
        delay(500),
        catchError((err) => {
          console.log('Error: ', err);
          return throwError(() => err);
        })
      );
  }

  complete(id: number) {
    return this.http.put<Todo>(`${url}/${id}`, { comleted: true });
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(delay(500));
  }
}
