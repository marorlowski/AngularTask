import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../service/app.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

   doneList: Array<Task> = [];

  constructor(private tasksService:AppService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>)=>{
      this.doneList = tasks.filter(t=>t.isDone === true);
    })
  }

  ngOnInit() {
  }

}
