import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AppService} from "../service/app.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {


  tasksList = [];

  constructor(private tasksService:AppService ) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) =>{
    this.tasksList = tasks.filter(t=> t.isDone === false);
    })
  }

  ngOnInit() {
  }

  remove(task:Task){
  this.tasksService.remove(task);
  }

  done(task:Task){
  this.tasksService.done(task);
  }


  getColor():string{
      return this.tasksList.length >=5 ? 'red' : 'green';
  }
}
