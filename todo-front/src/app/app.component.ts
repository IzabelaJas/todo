import { Component } from '@angular/core';
// import {task} from

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id?: number;
  task_title?: string;
  task_where?: string;
  task_done?: string = "Nie";

  // tasks!: task[];

  // public list: string[] = [];
  // public checkedd: any;

  // add(x: string){
  //   this.list.push(x);
  //   console.log(this.checkedd);
  // }
}
