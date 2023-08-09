import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from './app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private dbUrl= "http://localhost:8082/api/v1/tasks";
  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<AppComponent[]>{
    return this.httpClient.get<AppComponent[]>(this.dbUrl);
  }

  createTask(task: AppComponent): Observable<any>{
    return this.httpClient.post(this.dbUrl, task);
  }

  getTaskById(id: number): Observable<AppComponent>{
    return this.httpClient.get<AppComponent>(`${this.dbUrl}/${id}`);
  }

  updateTask(id: number, task: AppComponent): Observable<any>{
    return this.httpClient.put(`${this.dbUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.dbUrl}/${id}`);
  }

  completeTask(id: number, taskDoneValue: string): Observable<any> {                         //Niefajnie działa
    const task = { task_done: taskDoneValue };
    return this.httpClient.put(`${this.dbUrl}/${id}`, task);
  }
}
