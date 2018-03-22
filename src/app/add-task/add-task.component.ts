import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from "../service/app.service";

import {Task} from '../models/task'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {

  newTask: string;


  constructor(private tasksService: AppService,

              ) {
  }




  ngOnInit() {

  }

  add() {
    const task: Task = ({name: this.newTask, created: new Date().toLocaleString(), isDone:false})
    if (this.newTask != "" && this.newTask != null) {
      this.tasksService.add(task);
      this.newTask = '';
    } else {
      console.log("Wpisz nazwę zadania");

    }
  }


}
