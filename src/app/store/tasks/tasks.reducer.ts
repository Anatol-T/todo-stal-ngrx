import { createReducer, on } from '@ngrx/store';
import { DomainTask } from '../../models/tasks.models';
import { getTasksSuccessAction } from './tasks.actions';

const initialState: DomainTask = {};

export const tasksReducer = createReducer(
  initialState,
  on(getTasksSuccessAction, (state, action)=>{
    return {...state, [action.value.todoId]: action.value.tasks}
  })
);