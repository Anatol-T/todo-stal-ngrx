import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import { TasksService } from '../../services/tasks.service';
import { addTaskAction, addTaskSuccessAction, getTasksAction, getTasksSuccessAction } from './tasks.actions';

@Injectable()
export class TasksEffects {
  constructor(private tasksService: TasksService, private actions$: Actions) {}
  getTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      mergeMap(({ value }) =>
        this.tasksService.getTasks(value.todoId).pipe(
          map((res) => {
            return getTasksSuccessAction({
              value: { todoId: value.todoId, tasks: res.items },
            });
          })
        )
      )
    )
  );

  addTask = createEffect(() =>
    this.actions$.pipe(
      ofType(addTaskAction),
      mergeMap(({ value }) =>
        this.tasksService.addTask({todoId: value.todoId, title: value.title}).pipe(
          map((res) => {
            return addTaskSuccessAction({
              value: { todoId: value.todoId, task: res.data.item },
            });
          })
        )
      )
    )
  );
}
