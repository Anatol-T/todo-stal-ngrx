import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todos.models';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todoTitle = '';
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.select((state) => {
      console.log(state);
      return state.todos;
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.dispatch({ type: '[Todos] Get Todos' });
  }

  logoutHandler() {
    throw new Error('Method not implemented.');
  }
}
