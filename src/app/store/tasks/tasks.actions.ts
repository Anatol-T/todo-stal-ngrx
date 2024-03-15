import { createAction, props } from '@ngrx/store'
import { Task, UpdateTaskModel } from '../../models/tasks.models'

export const getTasksAction = createAction(
  '[Tasks] Get tasks',
  props<{ value: { todoId: string } }>()
)
export const getTasksSuccessAction = createAction(
  '[Tasks] Get tasks success',
  props<{ value: { todoId: string; tasks: Task[] } }>()
)

export const addTaskAction = createAction(
  '[Tasks] Add task',
  props<{ value: { todoId: string; title: string } }>()
)
export const addTaskSuccessAction = createAction(
  '[Tasks] Add task success',
  props<{ value: { todoId: string; task: Task } }>()
)

export const deleteTaskAction = createAction(
  '[Tasks] Delete task',
  props<{ value: { todoId: string; taskId: string } }>()
)
export const deleteTaskSuccessAction = createAction(
  '[Tasks] Delete task success',
  props<{ value: { todoId: string; taskId: string } }>()
)

export const updateTaskAction = createAction(
  '[Tasks] Update task',
  props<{ value: { todoId: string; taskId: string; model: UpdateTaskModel } }>()
)
export const updateTaskSuccessAction = createAction(
  '[Tasks] Update task success',
  props<{ value: { todoId: string; taskId: string; model: UpdateTaskModel } }>()
)