import { Action } from '@ngrx/store';

import { Task } from '../task.model';

// Exporting Actions Types

export const INITIALIZE_DATA = "[Todo List] INITIALIZE_DATA";
export const INITIALIZE_FINISH = "[Todo List] INITIALIZE_FINISH";
export const ADD_TASK = "[Todo List] ADD_TASK";
export const UPDATE_TASK = "[Todo List] UPDATE_TASK";
export const MODIFY_TASK_FINISH = "[Todo List] MODIFY_TASK_FINISH";

// Exporting Actions

export class InitializeData implements Action {
    readonly type = INITIALIZE_DATA;
}

export class InitializeFinish implements Action {
    readonly type = INITIALIZE_FINISH;
    payload : Task[];

    constructor(private tasks : Task[]) {
        this.payload = tasks;
    }
}

export class AddTask implements Action {
    readonly type = ADD_TASK;
    payload : Task[];

    constructor(private tasks : Task[]) {
        this.payload = tasks;
    }
}

export class UpdateTask implements Action {
    readonly type = UPDATE_TASK;
    payload : Task[];

    constructor(private tasks : Task[]) {
        this.payload = tasks;
    }
}

export class ModifyTaskFinish implements Action {
    readonly type = MODIFY_TASK_FINISH;
}

export type TasksActionsAvailable = AddTask | UpdateTask | InitializeData | InitializeFinish | ModifyTaskFinish;