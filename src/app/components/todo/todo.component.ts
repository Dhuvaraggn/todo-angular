import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { todo } from 'src/app/ToDo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
 @Input() todo:todo={tododesc:''}
 @Output() tododelete:any=new EventEmitter()
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
