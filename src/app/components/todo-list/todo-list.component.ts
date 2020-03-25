import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';

import * as TaskActions from './store/tasks.actions';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';
import { AppState } from './store/tasks.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks : Task[];
  tasksSubscription : Subscription;
  updatedTasks : Task[];

  constructor(private tasksService : TasksService,
              private store : Store<AppState>) { }

  ngOnInit() {
    this.tasksSubscription = this.store.select('tasksReducer')
      .subscribe(tasksData => {
        this.tasks = tasksData.tasks;
      });
    // this.tasksSubscription = this.tasksService.tasks
    //   .subscribe(tasksData => {
    //     this.tasks = tasksData;
    //     // console.log(this.tasks);
    //   })
  }

  onCompleteTask(task : Task, index : number) {
    const updatedTask = new Task(
      task.taskName,
      task.taskCreatedOn,
      true
    );
    this.updatedTasks = [...this.tasks];
    this.updatedTasks[index] = updatedTask;
    // this.tasksService.updateTasks(this.updatedTasks);
    this.store.dispatch(new TaskActions.UpdateTask(this.updatedTasks));
  }

}
