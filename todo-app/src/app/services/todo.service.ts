import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todo/model/todo.model';
import { Category } from '../categories/model/category.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosUrl = '/api/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.todosUrl + '/' + id);
  }

  getLatestTodo(): Observable<Todo> {
    return this.http.get<Todo>(this.todosUrl + '?limit=2&sort=desc');
  }

  createTodo(todo: Todo, category: Category): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl + '/' + category.id, todo);
  }

  updateTodoById(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.todosUrl + '/' + todo.id, todo);
  }

  deleteTodoById(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.todosUrl + '/' + id);
  }
}
