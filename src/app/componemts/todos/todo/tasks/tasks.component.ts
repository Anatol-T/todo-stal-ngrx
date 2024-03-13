import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../../models/tasks.models';
import { Filter } from '../../../../models/todos.models';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../store/types/appState.interface';
import { AsyncPipe, } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addTaskAction, getTasksAction } from '../../../../store/tasks/tasks.actions';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AsyncPipe, FormsModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input() todoId!: string;
  @Input() filter!: Filter;

  tasks$?: Observable<Task[]>;

  taskTitle = '';
  editMode = false;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.tasks$ = this.store.select((state) => {
      return state.tasks[this.todoId];
    });
    this.store.dispatch(getTasksAction({ value: { todoId: this.todoId } }));
  }

  addTaskHandler() {
    this.store.dispatch(
      addTaskAction({ value: { todoId: this.todoId, title: this.taskTitle } })
    );
    this.taskTitle = '';
  }
}
