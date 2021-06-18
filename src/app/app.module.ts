import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { ListtodoComponent } from './components/listtodo/listtodo.component';
import { TodoComponent } from './components/todo/todo.component';
import { colordirective } from './color.directive';
import { ifdirective } from './ifdirective.directive';
import { customdirective } from './customdirective.directive';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpserviceService } from './services/httpservice.service';
import { MsgserviceService } from './services/msgservice.service';
import { CustompipePipe } from './pipe/custompipe.pipe';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ListtodoComponent,
    TodoComponent,
    colordirective,
    ifdirective,
    customdirective,
    SenderComponent,
    ReceiverComponent,
    CustompipePipe,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //HttpserviceService,
    MsgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
