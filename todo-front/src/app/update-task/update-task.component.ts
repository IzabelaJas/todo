import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import {TasksService} from '../tasks.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['../tasks-list/tasks-list.component.css']
})
export class UpdateTaskComponent implements OnInit{
  id!: number;
  task!: AppComponent;

  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.task = new AppComponent();
    this.tasksService.getTaskById(this.id).subscribe(data =>{this.task = data;}, error => console.log(error));
  } 
  onSubmit(){
    this.tasksService.updateTask(this.id, this.task).subscribe(data=>{console.log(data); this.task = new AppComponent;}, error => console.log(error));
    this.router.navigate(['']).then(() => {
      location.reload();
  });
}

}
