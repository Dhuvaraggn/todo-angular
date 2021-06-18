import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { todo } from 'src/app/ToDo';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  @Output() addtodoemit:any=new EventEmitter()
  todoval={tododesc:'',notes:Array<string>()}
  formgrp:any;formnotes:any;
  constructor(private fb:FormBuilder) { }
 
  ngOnInit(): void {
    this.formgrp=this.fb.group({
      todo:this.fb.control(''),
      formnotes:this.fb.array([])
    })
  }
  addtodo()
  {
     var res=this.formgrp.value
     console.log(res.formnotes[0])
     var ar:Array<string>=[]
     var i=0;
     for(i=0;i<res.formnotes.length;i++)
     {
      ar.push(res.formnotes[i].formdesc)
      console.log(res.formnotes[i].formdesc)
     }
     console.log(ar)
      this.todoval={tododesc:res.todo,notes:ar};
    //    element.formdesc})];}
      this.addtodoemit.emit(this.todoval)
  }

  createform():FormGroup
  {
    return this.fb.group({
      formdesc:this.fb.control('')
    })
  }
  addformgrp()
  {
    this.formnotes=this.formgrp.get('formnotes') as FormArray
    const s=this.createform()
    this.formnotes.push(s)
    console.log(this.formgrp)
  }
  removeformgrp()
  {  this.formnotes=this.formgrp.get('formnotes') as FormArray
  this.formnotes=''
  }
}
