import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../todo-item/model/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  public todoItems: TodoItem[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoService.getTodoItems().subscribe((todoItems) => {
      this.todoItems = todoItems;
      console.log(this.todoItems);
    });
  }
}
