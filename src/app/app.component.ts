import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { TasksService } from './components/tasks.service';
import { AppState } from './components/todo-list/store/tasks.reducer';
import * as TaskActions from './components/todo-list/store/tasks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user : any;
  userSubs : Subscription;

  constructor(private tasksService : TasksService,
              private store : Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new TaskActions.InitializeData());
    // this.tasksService.onAccessThePage();
    // this.userSubs = this.tasksService.user
    //   .subscribe(userData => {
    //     this.user = userData;
    //     //console.log(this.user);
    //   })
  }

}
