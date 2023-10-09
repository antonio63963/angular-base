import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, pipe } from 'rxjs';
import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodosService) {}

  todos: Todo[] = [];
  titleValue = '';
  isLoading = false;

  ngOnInit() {
    if (this.titleValue.trim()) {
      this.todoService.fetchTodos().subscribe((response) => {
        this.todos = response ?? [];
      });
    }
  }

  addTodo() {
    this.isLoading = true;
    console.log(this.titleValue);
    const todo: Todo = {
      title: this.titleValue,
      completed: false,
    };
    this.todoService.add(todo)
      .subscribe((response) => {
        console.log('put: ', response);
        this.todos.push(response);
        this.isLoading = false;
        this.titleValue = '';
      });
  }

  deleteTodo(id: number) {
    this.isLoading = true;
    this.todoService.delete(id)
      .subscribe((_) => {
        this.todos = this.todos.filter((item) => item.id != id);
        this.isLoading = false;
      });
  }
}
