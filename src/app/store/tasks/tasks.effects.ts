import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { TasksService } from '../../services/tasks.service';
import { getTasksAction, getTasksSuccessAction } from './tasks.actions';

@Injectable()
export class TasksEffects {
  constructor(private tasksService: TasksService, private actions$: Actions) {}
  getTasks = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      exhaustMap(({ value }) =>
        this.tasksService.getTasks(value.todoId).pipe(
          map((res) => {
            return getTasksSuccessAction({value:{todoId: value.todoId, tasks: res.items}})
          })
        )
      )
    )
  );
}
