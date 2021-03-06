import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private store: Store<AuthState>
  ) {
    store.select('auth').subscribe(v => {
      if (v.user != null) {
        this.todos$ = todoService.getTodos(v.user.localId);
      }
    });
  }

  ngOnInit() {
  }

}
