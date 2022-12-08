import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../todo/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosUrl = '/api/todos';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  getCompletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + '?completed=true');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.todosUrl + '/' + id);
  }

  getLatestTodo(): Observable<Todo> {
    return this.http.get<Todo>(this.todosUrl + '?limit=2&sort=desc');
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo);
  }

  updateTodoById(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.todosUrl + '/' + todo.id, todo);
  }

  deleteTodoById(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.todosUrl + '/' + id);
  }
}
