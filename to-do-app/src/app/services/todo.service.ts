import { Injectable } from '@angular/core';
import { TodoItem } from '../todo-item/model/todo-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoUrl = 'api/ToDoItem';

  constructor(private http: HttpClient) {}

  getTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl + '?status=in_progress');
  }

  getCompletedTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl + '?status=done');
  }

  getOrderedTodoItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl + '?limit=10&order=desc');
  }

  getTodoItem(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(this.todoUrl + '/' + id);
  }

  addTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.todoUrl, todoItem);
  }

  updateTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(this.todoUrl + '/' + todoItem.id, todoItem);
  }

  deleteTodoItem(id: number): Observable<TodoItem> {
    return this.http.delete<TodoItem>(this.todoUrl + '/' + id);
  }
}
