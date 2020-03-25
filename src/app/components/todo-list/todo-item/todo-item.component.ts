import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task : Task;
  @Input() index : number;
  @Output() completeTask = new EventEmitter<void>();
  taskCreatedOn : string;

  constructor() { }

  ngOnInit() {
    this.taskCreatedOn = new Date(this.task.taskCreatedOn).getDate() + "/" 
      + new Date(this.task.taskCreatedOn).getMonth() + "/" 
      + new Date(this.task.taskCreatedOn).getFullYear();
  }

  onTaskComplete() {
    this.completeTask.emit();
  }

}
