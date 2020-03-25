import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks : Task[];
  tasksSubscription : Subscription;
  updatedTasks : Task[];

  constructor(private tasksService : TasksService) { }

  ngOnInit() {
    this.tasksSubscription = this.tasksService.tasks
      .subscribe(tasksData => {
        this.tasks = tasksData;
        // console.log(this.tasks);
      })
  }

  onCompleteTask(task : Task, index : number) {
    const updatedTask = new Task(
      task.taskName,
      task.taskCreatedOn,
      true
    );
    this.updatedTasks = [...this.tasks];
    this.updatedTasks[index] = updatedTask;
    this.tasksService.updateTasks(this.updatedTasks);
  }

}
