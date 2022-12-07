import { Component, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from './model/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input('todoItem') public todoItem: TodoItem | undefined;

  constructor(private todoService: TodoService) {}

  toggleCompleted() {
    if (this.todoItem) {
      this.todoItem.status.isDone = !this.todoItem.status.isDone;
      this.todoService.updateTodoItem(this.todoItem).subscribe();
    }
  }
}
