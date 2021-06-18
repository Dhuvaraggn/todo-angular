import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { todo } from 'src/app/ToDo';
import { todolist } from 'src/app/ToDos';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
 @Input() todo:todo={tododesc:'',notes:Array<string>()};
 @Output() tododelete:any=new EventEmitter()
 todonotes:string[]=this.todo.notes;
  constructor() { 

    console.log(this.todo)
  }

  ngOnInit(): void {
  }
  deletetodo(id:any)
  {
    console.log(id)
    this.tododelete.emit(id)
  }
}
