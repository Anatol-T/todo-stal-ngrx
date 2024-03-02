import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { addTodoAction, addTodoSuccessAction, getTodosAction, getTodosSuccessAction} from "./todos.actions";
import { HttpClient } from "@angular/common/http";
import { TodosService } from "../../services/todos.service";

@Injectable()
export class TodosEffects {
  constructor(
    private todosService: TodosService,
    private http: HttpClient,
    private actions$: Actions
  ) {}
  getTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodosAction),
      exhaustMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => {
            return { type: '[Todos] Get todos success', value: todos };
            // { type: '[Todos] Set', value: todos }
          })
        )
      )
    )
  );
  addTodo = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodoAction),
      exhaustMap(({ value }) =>
        this.todosService.addTodo(value)
          .pipe(
            map((res) => {
              console.log(res);

              return addTodoSuccessAction({ value: res.data.item });
            })
          )
      )
    )
  )}