import { Component, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todo: Todo | undefined;

  constructor(private todoService: TodoService) {
    this.todo = new Todo(0, '', '', new Date(), false);
  }

  onSubmit(): void {
    if (this.todo) {
      this.todoService.createTodo(this.todo);
      this.todo = undefined;
    }
  }
}
