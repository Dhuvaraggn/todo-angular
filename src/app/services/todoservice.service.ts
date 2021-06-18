import { Injectable } from '@angular/core';
import { todo } from '../ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todolist:todo[]=[]
  constructor() { 
    var td=localStorage.getItem("todolist")
    if(td)
    {
      this.todolist=JSON.parse(td)
    }
  }
}
