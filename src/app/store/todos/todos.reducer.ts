import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todos.models";
import { addTodoSuccessAction, deleteTodoSuccessAction, getTodosSuccessAction, updateTodoTitleSuccessAction } from "./todos.actions";

const initialState: Todo[] = []

export const todosReducer = createReducer(
  initialState,
  on(getTodosSuccessAction, (_state, action) => {
    console.log(action.value);

    return action.value;
  }),

  on(addTodoSuccessAction, (state, action) => {
    return [action.value, ...state];
  }),

  on(deleteTodoSuccessAction, (state, action) => {
    return state.filter((el) => el.id !== action.value);
  }),

  on(updateTodoTitleSuccessAction, (state, action) => {
    return state.map((el) => el.id == action.value.todoId ? {...el, title: action.value.title} : {...el});
  })
);
