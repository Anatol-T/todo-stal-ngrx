import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todos.models";
import { set } from "./todos.actions";

const initialState: Todo[] = []

export const todosReducer = createReducer(
  initialState,
  on(set, (_state, action) => {
    console.log(action.value);
    
    return action.value
  })
  )
