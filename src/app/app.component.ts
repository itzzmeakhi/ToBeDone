import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TasksService } from './components/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user : any;
  userSubs : Subscription;

  constructor(private tasksService : TasksService) {}

  ngOnInit() {
    this.tasksService.onAccessThePage();
    this.userSubs = this.tasksService.user
      .subscribe(userData => {
        this.user = userData;
        //console.log(this.user);
      })
  }

}
