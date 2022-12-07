import { Component, Input } from '@angular/core';
import { Category } from '../categories/model/category.model';
import { TodoService } from '../services/todo.service';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo | undefined;
  @Input() category: Category | undefined;

  constructor(private todoService: TodoService) {}

  toggleDone() {
    if (this.todo) {
      this.todo.done = !this.todo.done;
      this.todoService.updateTodoById(this.todo);
    }
  }

  createTodo() {
    if (this.todo && this.category) {
      this.todoService.createTodo(this.todo, this.category);
    }
  }

  deleteTodo() {
    if (this.todo) {
      this.todoService.deleteTodoById(this.todo.id);
    }
  }
}
