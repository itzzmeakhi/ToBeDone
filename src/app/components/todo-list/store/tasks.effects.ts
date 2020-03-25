import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { tap, switchMap, map, mergeMap } from 'rxjs/operators';

import * as TaskActions from './tasks.actions';
import { TasksService } from '../../tasks.service';
import { Task } from '../task.model';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {

    constructor(private actions$ : Actions,
        private tasksService : TasksService) {}

    @Effect() 
    loadData = this.actions$.pipe(
        ofType(TaskActions.INITIALIZE_DATA),
        switchMap(() => {
            const tasks : Task[] = this.tasksService.onAccessThePage();
            return of(new TaskActions.InitializeFinish(tasks));
        })
    )

    @Effect()
    addTask = this.actions$.pipe(
        ofType(TaskActions.ADD_TASK),
        switchMap((addTaskResponse : TaskActions.AddTask) => {
            // console.log(addTaskResponse);
            localStorage.setItem('ToBeDone_Tasks', JSON.stringify(addTaskResponse.payload))
            return of(new TaskActions.ModifyTaskFinish());
        })
    )

    @Effect()
    updateTask = this.actions$.pipe(
        ofType(TaskActions.UPDATE_TASK),
        switchMap((updatedTaskResponse : TaskActions.UpdateTask) => {
            // console.log(updatedTaskResponse);
            localStorage.setItem('ToBeDone_Tasks', JSON.stringify(updatedTaskResponse.payload));
            return of(new TaskActions.ModifyTaskFinish());
        })
    )

        


}