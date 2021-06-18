import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { MsgserviceService } from 'src/app/services/msgservice.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {
  date=new Date();
  constructor(private msgservice:MsgserviceService,private http:HttpserviceService) {
    
  console.log(this.date)
   }

  ngOnInit(): void {
  }
  sendmsg(f:any)
  {
    console.log(f.value)
    this.msgservice.changesubject(f.value.msg)
    this.msgservice.changebehavioursubj(f.value.msg)
    this.msgservice.changemsg(f.value.msg)
  }
}
