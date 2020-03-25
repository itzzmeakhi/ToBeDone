import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Task } from '../components/todo-list/task.model';


@Injectable({ 'providedIn' : 'root' })
export class TasksService {

    user = new BehaviorSubject<any>(null);
    tasks = new BehaviorSubject<Task[]>(null);



    // Triggers when user accessed the page

    onAccessThePage() {
        if(localStorage.getItem('ToBeDone_User')) {
            const userDetails = JSON.parse(localStorage.getItem('ToBeDone_User'));
            if(userDetails.expirationTimer > new Date().getTime()) {
                const tasksList : Task[]= JSON.parse(localStorage.getItem('ToBeDone_Tasks'));
                this.user.next(userDetails);
                this.tasks.next(tasksList);
            } else {
                const user = {
                    'name' : 'user',
                    'expirationTimer' : new Date().getTime() + 86400000
                }
                localStorage.setItem('ToBeDone_User', JSON.stringify(user));
                const tasksList : Task[] = null;
                this.user.next(user);
                this.tasks.next(tasksList);
            }
        } else {
            const user = {
                'name' : 'user',
                'expirationTimer' : new Date().getTime() + 86400000
            }
            localStorage.setItem('ToBeDone_User', JSON.stringify(user));
            const tasksList : Task[] = null;
            this.user.next(user);
            this.tasks.next(tasksList);
        }
    }

    // Triggers when a task is added

    addNewTask(updatedTasks : Task[]) {
        localStorage.setItem('ToBeDone_Tasks', JSON.stringify(updatedTasks));
        this.tasks.next(updatedTasks);
    }

    // Triggers when a task is completed

    updateTasks(updatedTasks : Task[]) {
        console.log(updatedTasks);
        localStorage.setItem('ToBeDone_Tasks', JSON.stringify(updatedTasks));
        this.tasks.next(updatedTasks);
    }
}