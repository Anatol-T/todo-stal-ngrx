import { Component, Input } from '@angular/core';
import { Filter, Todo } from '../../../models/todos.models';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Store, StoreConfig } from '@ngrx/store';
import {
  deleteTodoAction,
  updateTodoTitleAction,
} from '../../../store/todos/todos.actions';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgIf, TasksComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo!: Todo;

  isEditMode = false;
  newTitle = '';
  filter: Filter = 'all';

  constructor(private store: Store) {}

  removeTodoHandler() {
    // this.removeTodoEvent.emit(this.todo.id);
    this.store.dispatch(deleteTodoAction({ value: this.todo.id }));
  }

  toggleEditMode() {
    if (this.isEditMode) {
      // this.editTodoEvent.emit({ todoId: this.todo.id, title: this.newTitle });
      this.store.dispatch(
        updateTodoTitleAction({
          value: { todoId: this.todo.id, title: this.newTitle },
        })
      );
    } else {
      this.newTitle = this.todo.title;
    }
    this.isEditMode = !this.isEditMode;
  }

  changeFilter(filter: Filter) {
    this.filter = filter;
  }
}
