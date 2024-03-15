import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Task, UpdateTaskModel } from '../../../../../models/tasks.models'
import { TaskStatusEnum } from '../../../../../models/enums/taskStatus.enum'
import { FormsModule } from '@angular/forms'
import { Store } from '@ngrx/store'
import { AppStateInterface } from '../../../../../store/types/appState.interface'
import {
  deleteTaskAction,
  updateTaskAction,
} from '../../../../../store/tasks/tasks.actions'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() todoId!: string
  @Input() task!: Task

  taskStatusEnum = TaskStatusEnum
  newTitle: string = ''
  editMode = false

  constructor(private store: Store<AppStateInterface>) {}

  removeTaskHandler() {
    this.store.dispatch(
      deleteTaskAction({ value: { todoId: this.todoId, taskId: this.task.id } })
    )
  }
  changeTaskStatusHandler($event: MouseEvent) {
    const newStatus = ($event.currentTarget as HTMLInputElement).checked

    this.changeTask({
      status: newStatus
        ? this.taskStatusEnum.completed
        : this.taskStatusEnum.active,
    })
  }
  editTitleHandler() {
    this.changeTask({ title: this.newTitle })
    this.editMode = false
  }
  activateEditMode() {
    this.newTitle = this.task.title
    this.editMode = true
  }

  changeTask(patch: Partial<UpdateTaskModel>) {
    const model: UpdateTaskModel = {
      status: this.task.status,
      title: this.task.title,
      completed: this.task.completed,
      deadline: this.task.deadline,
      description: this.task.description,
      priority: this.task.priority,
      startDate: this.task.startDate,
      ...patch,
    }
    this.store.dispatch(
      updateTaskAction({
        value: { todoId: this.todoId, taskId: this.task.id, model },
      })
    )
  }
}
