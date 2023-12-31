import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateTaskComponent } from './create-task/create-task.component';
import {FormsModule} from '@angular/forms';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
