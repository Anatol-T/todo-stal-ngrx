import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todos.models';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todoTitle = '';
  // todos$: Observable<Todo[]>

  constructor(private store: Store<Todo[]>, private http: HttpClient) {
    // this.todos$ = this.store.select(state => state)
    this.http.get(`${environment.baseUrl}/todo-lists`).subscribe();
  }

  logoutHandler() {
    throw new Error('Method not implemented.');
  }
}
