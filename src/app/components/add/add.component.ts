import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';
import { todo } from 'src/app/ToDo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  todolist:todo[]=[]
  constructor(private service:TodoserviceService) { 
    this.todolist=service.todolist;
  }

  ngOnInit(): void {
  }
  addtodo(todoadd:any)
  
  {
    console.log(this.todolist)
    todoadd={id:this.todolist.length+1,tododesc:todoadd.tododesc,notes:todoadd.notes}
    this.todolist.push(todoadd)
    localStorage.setItem("todolist",JSON.stringify(this.todolist))
    console.log(this.todolist)
  }

}
