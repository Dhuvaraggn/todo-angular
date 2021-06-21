import { JsonpClientBackend } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/ToDo';
import { todolist } from 'src/app/ToDos';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.scss'],
})
export class ListtodoComponent implements OnInit {
  @Input() todolist: todo[] = [];
  @Output() changelist: any = new EventEmitter();
  todos: todo[] = [];
  constructor() {
    var tdlist = localStorage.getItem('todolist');
    if (tdlist) {
      this.todolist = JSON.parse(tdlist);
    }
    console.log(this.todolist);
  }

  ngOnInit(): void {}
  deletetodo(id: any) {
    this.changelist.emit(id);
  }
}
