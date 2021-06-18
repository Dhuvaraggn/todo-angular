import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/ToDo';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  @Output() addtodoemit:any=new EventEmitter()
  todoval:todo={tododesc:''}
  constructor() { }

  ngOnInit(): void {
  }
  addtodo(f:any)
  {
    console.log(f.value)
    this.todoval={tododesc:f.value.todo}
    this.addtodoemit.emit(this.todoval)
    this.todoval={tododesc:''}
  }

}
