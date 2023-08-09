import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateTaskComponent } from './update-task/update-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path: 'update-task/:id', component: UpdateTaskComponent},
  {path: 'create-task', component: CreateTaskComponent},
  {path: '', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
