import { Component, OnInit } from '@angular/core';
import { MsgserviceService } from 'src/app/services/msgservice.service';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  msg=''
  subj=''
  behavioursubj=''
  data:any;
  constructor(private msgservice:MsgserviceService
              //,private http:HttpserviceService
              ) {
    this.msgservice.behaviourmsg.subscribe((res:any)=>
    {
      this.behavioursubj=res;
    });
    this.msgservice.subjectmsg.subscribe((res:any)=>{
      this.subj=res;
    });
    this.msg=this.msgservice.msg
//  this.http.getdata().subscribe((observer)=>{this.data=observer})
   }

  ngOnInit(): void {
    
  }

}
