import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs";
import { addTodoAction, addTodoSuccessAction, deleteTodoAction, deleteTodoSuccessAction, getTodosAction, getTodosSuccessAction, updateTodoTitleAction, updateTodoTitleSuccessAction} from "./todos.actions";
import { TodosService } from "../../services/todos.service";

@Injectable()
export class TodosEffects {
  constructor(private todosService: TodosService, private actions$: Actions) {}
  getTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodosAction),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => {
            return { type: '[Todos] Get todos success', value: todos };
          })
        )
      )
    )
  );

  addTodo = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodoAction),
      mergeMap(({ value }) =>
        this.todosService.addTodo(value).pipe(
          map((res) => {
            return addTodoSuccessAction({ value: res.data.item });
          })
        )
      )
    )
  );

  deleteTodo = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoAction),
      mergeMap(({ value }) =>
        this.todosService.removeTodo(value).pipe(
          map((res) => {
            return deleteTodoSuccessAction({ value });
          })
        )
      )
    )
  );

  updateTodoTitle = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodoTitleAction),
      mergeMap(({ value }) =>
        this.todosService.updateTodoTitle(value).pipe(
          map((res) => {
            return updateTodoTitleSuccessAction({ value });
          })
        )
      )
    )
  );
}

