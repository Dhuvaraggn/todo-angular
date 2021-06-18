import { Component } from '@angular/core';
import { todolist } from './ToDos';
import { todo } from './ToDo';
import { JsonpClientBackend } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';
  condition=true;
  todolist:todo[]=[];
  constructor(private route:Router)
  {
    
  }
  gotoadd()
  {
    this.route.navigate(['add'])
  }
}
