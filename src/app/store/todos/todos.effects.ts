import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, of, switchMap } from "rxjs";
import { initTodos, set } from "./todos.actions";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../../models/todos.models";
import { environment } from "../../../environments/environment";

@Injectable()
export class TodosEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  // getTodos = createEffect(() => this.actions$.pipe(
  //   ofType('[Todos] Get Todos'),
  //   exhaustMap(()=>this.http.get(`${environment.baseUrl}/todo-lists`)
  //   .pipe(
  //     map(todos=>({type: '[Todos] Set', value: todos}))
  //   ))
  // ))
}
// switchMap(() => {
//   const todos = this.http
//     .get<Todo[]>(`${environment.baseUrl}/todo-lists`)
//     .subscribe((todos) => {});
//   if (todos) {
//     return of(set({ value: todos }));
//   }
//   return of(set({ value: [] }));
// });

// this.actions$.pipe(
//       ofType('[Todos] Get Todos'),
//       exhaustMap(() =>
//         this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`).pipe(
//           map((todos) => ({ type: '[Todos] Set', payload: todos })),
//           // catchError(() => EMPTY)
//         )
//       )
//     )
//   );