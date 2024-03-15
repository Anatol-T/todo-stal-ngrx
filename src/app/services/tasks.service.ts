import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { CommonResponse } from '../models/core.models'
import { GetTasksResponse, Task, UpdateTaskModel } from '../models/tasks.models'

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(todoId: string) {
    return this.http.get<GetTasksResponse>(
      `${environment.baseUrl}/todo-lists/{${todoId}}/tasks`
    )
  }

  addTask(data: { todoId: string; title: string }) {
    return this.http.post<CommonResponse<{ item: Task }>>(
      `${environment.baseUrl}/todo-lists/{${data.todoId}}/tasks`,
      {
        title: data.title,
      }
    )
  }

  removeTask(data: { todoId: string; taskId: string }) {
    return this.http.delete<CommonResponse>(
      `${environment.baseUrl}/todo-lists/{${data.todoId}}/tasks/${data.taskId}`
    )
  }

  updateTask(data: {
    todoId: string
    taskId: string
    model: UpdateTaskModel
  }) {
    return this.http.put<CommonResponse>(
      `${environment.baseUrl}/todo-lists/{${data.todoId}}/tasks/${data.taskId}`,
      data.model
    )
  }
}
