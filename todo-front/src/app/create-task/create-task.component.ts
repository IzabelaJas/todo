import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import {TasksService} from '../tasks.service';
import {Router} from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'create',
  templateUrl: './create-task.component.html',
  styleUrls: ['../tasks-list/tasks-list.component.css']
})
export class CreateTaskComponent {

  task: AppComponent = new AppComponent();
  constructor(private tasksService: TasksService, private router: Router){}

  saveTask(){
    this.tasksService.createTask(this.task).subscribe(data => {console.log(data);}, error => console.log(error));
  }

  onSubmit(){
    console.log(this.task);
    this.saveTask();
    this.router.navigate(['']).then(() => {
      location.reload();
    
  });

}}
