import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todos.models";

export const getTodosAction = createAction('[Todos] Get todos');
export const getTodosSuccessAction = createAction('[Todos] Get todos success', props<{ value: Todo[] }>());

export const addTodoAction = createAction('[Todos] AddTodo', props<{ value: string }>());
export const addTodoSuccessAction = createAction(
  '[Todos] Add Todo success',
  props<{ value: Todo }>()
);

export const deleteTodoAction = createAction(
  '[Todos] Delete todo',
  props<{ value: string }>()
);
export const deleteTodoSuccessAction = createAction(
  '[Todos] Delete todo succsess',
  props<{ value: string }>()
);

export const updateTodoTitleAction = createAction(
  '[Todos] Update Todo',
  props<{ value: {todoId: string, title: string} }>()
);
export const updateTodoTitleSuccessAction = createAction(
  '[Todos] Update Todo success',
  props<{ value: { todoId: string; title: string } }>()
);