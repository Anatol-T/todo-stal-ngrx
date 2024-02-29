import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todos.models";
import { addTodoSuccessAction, getTodosSuccessAction } from "./todos.actions";

const initialState: Todo[] = []

export const todosReducer = createReducer(
  initialState,
  on(getTodosSuccessAction, (_state, action) => {
    console.log(action.value);

    return action.value;
  }),
  on(addTodoSuccessAction, (state, action) => {
    return [...state, action.value]
  })
);
