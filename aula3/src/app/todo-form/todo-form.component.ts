import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {
    id: 0,
    finished: false,
    title: '',
    description: '',
    date: '',
  };
  isAdding: boolean = true;

  constructor(
    private todoService: TodoService,
    private router: Router
    private Active
    ) { }

  ngOnInit() {
  }

  onFormSend() {
    if (this.isAdding) {
    this.todoService.addTodo(this.todo)
    .subscribe(valor => {
      console.log(valor);
      alert('To-Do adicionado com sucesso');

      this.router.navigateByUrl('/todos');
    }, error => {
      alert('Erro ao adicionar');
    });
  } else {

  }

}
