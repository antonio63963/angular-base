import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, pipe } from 'rxjs';

interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  todos: Todo[] = [];
  titleValue = '';
  isLoading = false;

  ngOnInit() {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe((response) => {
        this.todos = response ?? [];
      });
  }

  addTodo() {
    this.isLoading = true;
    console.log(this.titleValue);
    const todo: Todo = {
      title: this.titleValue,
      completed: false,
    };
    this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .pipe(delay(2000))
      .subscribe((response) => {
        console.log('put: ', response);
        this.todos.push(response);
        this.isLoading = false;
        this.titleValue = '';
      });
  }

  deleteTodo(id: number) {
    this.isLoading = true;
    this.http
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(delay(1000))
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((item) => item.id != id);
          this.isLoading = false;
        }
        
      );
  }
}
