import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { TasksService } from '../../tasks.service';
import { Task } from '../task.model';
import * as TaskActions from '../store/tasks.actions';
import { AppState } from '../store/tasks.reducer';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit, OnDestroy {

  addTasksForm : FormGroup;
  tasksAvailable : Task[];
  addTaskSubscription : Subscription;
  tasksSubscription : Subscription;
  updatedTasksList : Task[];

  constructor(private tasksService : TasksService,
              private store : Store<AppState>) { }

  ngOnInit() {
    this.addTasksForm = new FormGroup({
      'newTask' : new FormControl('', [ Validators.required ])
    })
  }

  get newTask() {
    return this.addTasksForm.get('newTask');
  }


  onFormSubmit() {
    // console.log(this.newTask);
    const newTask = new Task(
      this.newTask.value,
      new Date(),
      false
    );

    this.store.select('tasksReducer')
      .subscribe(tasksData => {
        this.tasksAvailable = tasksData.tasks;

        if(this.tasksAvailable && this.tasksAvailable.length != 0) {
          this.updatedTasksList = [...this.tasksAvailable, newTask];
        } else {
          this.updatedTasksList = [newTask];
        }
      })

    // this.tasksSubscription = this.tasksService.tasks
    //   .subscribe(tasksData => {
    //     this.tasksAvailable = tasksData;

    //     if(this.tasksAvailable && this.tasksAvailable.length != 0) {
    //       this.updatedTasksList = [...this.tasksAvailable, newTask];
    //     } else {
    //       this.updatedTasksList = [newTask];
    //     }
    //   })
    // this.tasksService.addNewTask(this.updatedTasksList);
    this.addTasksForm.reset();
    this.store.dispatch(new TaskActions.AddTask(this.updatedTasksList));
  }

  ngOnDestroy() {
    if(this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }

}
