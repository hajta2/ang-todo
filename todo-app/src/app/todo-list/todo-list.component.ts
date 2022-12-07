import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  public todos: Todo[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}
