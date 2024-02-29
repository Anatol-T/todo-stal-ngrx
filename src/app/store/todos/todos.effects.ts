import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, of, switchMap } from "rxjs";
import { addTodoAction, addTodoSuccessAction, getTodosAction, getTodosSuccessAction} from "./todos.actions";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../../models/todos.models";
import { environment } from "../../../environments/environment";
import { CommonResponse } from "../../models/core.models";
import { props } from "@ngrx/store";

@Injectable()
export class TodosEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}
  getTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodosAction),
      exhaustMap(() =>
        this.http.get(`${environment.baseUrl}/todo-lists`).pipe(
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
      exhaustMap(({value}) =>
        this.http
          .post<CommonResponse<{ item: Todo }>>(
            `${environment.baseUrl}/todo-lists`,
            {title: value}
          )
          .pipe(
            map((res) => {
              console.log(res);

              return addTodoSuccessAction({value: res.data.item});
            })
          )
      )
    )
  );
}