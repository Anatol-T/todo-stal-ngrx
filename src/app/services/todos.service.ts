import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Todo } from "../models/todos.models";
import { CommonResponse } from "../models/core.models";

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`)
  }

  addTodo(title: string) {
    return this.http
      .post<CommonResponse<{ item: Todo }>>(
        `${environment.baseUrl}/todo-lists`,
        { title }
      )
  }

  removeTodo(id: string) {
    return this.http
      .delete<CommonResponse>(`${environment.baseUrl}/todo-lists/{${id}}`)
  }

  updateTodoTitle(data: { todoId: string; title: string }) {
    return this.http
      .put<CommonResponse>(
        `${environment.baseUrl}/todo-lists/{${data.todoId}}`,
        {
          title: data.title,
        }
      )
  }
}
