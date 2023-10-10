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
    this.fetchTodos();
  }
  
  fetchTodos() {
    this.todoService.fetchTodos().subscribe((response) => {
      console.log(response)
      this.todos = response ?? [];
    });
  }

  addTodo() {
    if (this.titleValue.trim()) {
      this.isLoading = true;
      console.log(this.titleValue);
      const todo: Todo = {
        title: this.titleValue,
        completed: false,
      };
      this.todoService.add(todo).subscribe((response) => {
        console.log('put: ', response);
        this.todos.push(response);
        this.isLoading = false;
        this.titleValue = '';
      });
    }
  }

  completeTodo(id: number) {
    this.todoService.complete(id)
    .subscribe(response => {
      const completed = this.todos.find(item => item.id === id);
      completed ? completed.completed = true : false;
    })
  }

  deleteTodo(id: number) {
    this.isLoading = true;
    this.todoService.delete(id).subscribe((_) => {
      this.todos = this.todos.filter((item) => item.id != id);
      this.isLoading = false;
    });
  }
}
