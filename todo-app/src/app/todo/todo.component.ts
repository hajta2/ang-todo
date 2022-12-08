import { Component, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo | undefined;
  isEditing: boolean = false;
  constructor(private todoService: TodoService) {}

  toggleCompleted(): void {
    if (this.todo) {
      this.todo.done = !this.todo.done;
      this.todoService.updateTodoById(this.todo).subscribe();
    }
  }

  removeTodoById(id: number): void {
    this.todoService.deleteTodoById(id).subscribe();
  }

  setTodoToEdit(): void {
    this.isEditing = true;
  }

  cancelTodoEdit(): void {
    this.isEditing = false;
  }

  updateTodo(title: string): void {
    if (this.todo) {
      this.todo.title = title;
      this.todoService.updateTodoById(this.todo).subscribe();
    }
    this.isEditing = false;
  }
}
