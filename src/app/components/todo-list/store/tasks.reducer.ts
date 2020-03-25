// Action
// Reducer
// Store

const initialState : state = {
    tasks :[
        { 'taskName' : 'Task 1', 'taskCreatedOn' : new Date(), 'isCompleted' : false },
        { 'taskName' : 'Task 2', 'taskCreatedOn' : new Date(), 'isCompleted' : false },
        { 'taskName' : 'Task 3', 'taskCreatedOn' : new Date(), 'isCompleted' : false },
        { 'taskName' : 'Task 4', 'taskCreatedOn' : new Date(), 'isCompleted' : false }
    ]
}

export interface state {
    tasks : Task[];
}

export interface AppState {
    tasksReducer : state;
}

import * as TaskActions from './tasks.actions';
import { Task } from '../task.model';

export function TasksReducer(state : state = initialState, action : TaskActions.TasksActionsAvailable) {
    switch(action.type) {
        case TaskActions.ADD_TASK:
            return {
                ...state,
                tasks : action.payload
            };
        case TaskActions.UPDATE_TASK:
            return {
                ...state,
                tasks : action.payload
            };
        case TaskActions.INITIALIZE_DATA:
            return {
                ...state
            };
        case TaskActions.INITIALIZE_FINISH:
            return {
                ...state,
                tasks : action.payload
            };
        case TaskActions.MODIFY_TASK_FINISH:
            return {
                ...state
            };
        default:
            return state;
    }
}