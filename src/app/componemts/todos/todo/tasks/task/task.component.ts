import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../../../../models/tasks.models';
import { TaskStatusEnum } from '../../../../../models/enums/taskStatus.enum';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../../../store/types/appState.interface';
import { deleteTaskAction } from '../../../../../store/tasks/tasks.actions';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() todoId!: string;
  @Input() task!: Task;

  taskStatusEnum = TaskStatusEnum;
  newTitle: string = '';
  editMode = false;

  constructor(private store: Store<AppStateInterface>) {}

  removeTaskHandler() {
    this.store.dispatch(
      deleteTaskAction({ value: { todoId: this.todoId, taskId: this.task.id } })
    );
  }
  changeTaskStatusHandler($event: MouseEvent) {}
  editTitleHandler() {}
  activateEditMode() {
    this.editMode = true;
  }
}
