import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../todo-item/model/todo-item.model';
import { ToDoPriority } from '../todo-item/model/todo-priority.model';
import { TodoStatus } from '../todo-item/model/todo-status.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  todoItem: TodoItem | undefined;
  constructor(private todoService: TodoService) {
    this.addTodoItem();
  }

  addTodoItem() {
    this.todoItem = new TodoItem(
      1,
      '',
      new TodoStatus(2, false),
      '',
      new Date(),
      new ToDoPriority(1, 1)
    );
  }

  onSubmit() {
    if (this.todoItem) {
      console.log(this.todoItem);
      this.todoService.addTodoItem(this.todoItem);
    }
  }
}
