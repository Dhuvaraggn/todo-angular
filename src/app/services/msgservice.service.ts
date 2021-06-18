import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgserviceService {

  private subjectsource=new Subject<string>();
  subjectmsg=this.subjectsource.asObservable();
  private behavioursource=new BehaviorSubject<string>("hello")
  behaviourmsg=this.behavioursource.asObservable();
  msg=' some text'
  constructor() { 
  }
  changesubject(msg:string)
  {
    this.subjectsource.next(msg);
  }
  changebehavioursubj(msg:string)
  {
    this.behavioursource.next(msg)
  }
  changemsg(msg:string)
  {
    this.msg=msg
  }
}
