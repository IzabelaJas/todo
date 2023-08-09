import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {TasksService} from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  tasks?: AppComponent[];
  

  constructor(private tasksService: TasksService, private router: Router){}

  ngOnInit(): void{
    this.getTaskss();
  }
  
  private getTaskss(){
    this.tasksService.getTasks().subscribe(data =>
      {
        this.tasks = data;
      });
  }

  public updateTask(id: any){
    this.router.navigate(['update-task', id]);
  }

  createTask(){
    this.router.navigate(['create-task']);
  }

  public completeTask(id: any) {                                                    //Niefajnie działa
    const task = this.tasks?.find(task => task.id === id);
    if (task) {
      const taskDoneValue = task.task_done === 'Tak' ? 'Nie' : 'Tak';
      this.tasksService.completeTask(id, taskDoneValue).subscribe(() => {
        task.task_done = taskDoneValue;
      });
    }
  }


  public deleteTask(id: any){
    this.tasksService.deleteTask(id).subscribe(data=>{this.getTaskss()
  })
  }

// export class emptyClass{}

}
