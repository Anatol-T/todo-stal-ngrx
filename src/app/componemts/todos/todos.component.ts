import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todos.models';
import { Store, props } from '@ngrx/store';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addTodoAction, getTodosAction } from '../../store/todos/todos.actions';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, AsyncPipe, FormsModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todoTitle = '';
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select((state) => {
      return state.todos;
    });
  }
  ngOnInit(): void {
    this.store.dispatch(getTodosAction());
  }

  logoutHandler() {}

  addTodoHandler() {
    this.store.dispatch(addTodoAction({value: this.todoTitle}));
    this.todoTitle = ''
  }
}
