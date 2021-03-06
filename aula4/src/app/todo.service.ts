import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  URL = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) { }

  getTodos(userId: string): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/users/' + userId + '/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post(this.URL, todo);
  }

}
