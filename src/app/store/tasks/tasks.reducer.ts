import { createReducer, on } from '@ngrx/store'
import { DomainTask } from '../../models/tasks.models'
import {
  addTaskSuccessAction,
  deleteTaskSuccessAction,
  getTasksSuccessAction,
  updateTaskSuccessAction,
} from './tasks.actions'

const initialState: DomainTask = {}

export const tasksReducer = createReducer(
  initialState,
  on(getTasksSuccessAction, (state, action) => {
    return { ...state, [action.value.todoId]: action.value.tasks }
  }),
  on(addTaskSuccessAction, (state, action) => {
    return {
      ...state,
      [action.value.todoId]: [action.value.task, ...state[action.value.todoId]],
    }
  }),
  on(deleteTaskSuccessAction, (state, action) => {
    return {
      ...state,
      [action.value.todoId]: state[action.value.todoId].filter(
        el => el.id !== action.value.taskId
      ),
    }
  }),
  on(updateTaskSuccessAction, (state, action) => {
    return {
      ...state,
      [action.value.todoId]: state[action.value.todoId].map(el => el.id === action.value.taskId ? {...el, ...action.value.model}: {...el})
    }
  })
)
