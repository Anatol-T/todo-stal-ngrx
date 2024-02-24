import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todos.models";

export const initTodos = createAction('[Todos] Init');

export const set = createAction('[Todos] Set', props<{ value: Todo[] }>());
