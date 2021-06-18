import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'src/app/services/todoservice.service';
import { todo } from 'src/app/ToDo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todolist:todo[]=[]
  constructor(private service:TodoserviceService) { 
    // var td=localStorage.getItem("todolist")
    // if(td)
    // {
    //   this.todolist=JSON.parse(td)
    // }
    this.todolist=service.todolist
  }

  ngOnInit(): void {
  }

  chglist(id:any)
  {
    console.log(id)
    for( var i = 0; i < this.todolist.length; i++){ 
    
      if ( this.todolist[i].id === id) { 
  
          this.todolist.splice(i, 1); 
      }
    }
    localStorage.setItem("todolist",JSON.stringify(this.todolist))
    var idb=indexedDB.open
  
  }
}
