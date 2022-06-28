import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { names } from '../loginform/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  @Input() 
  formdata:names;

  @Output() event=new EventEmitter();

  editinfo(formdata:any){
    this.event.emit(formdata);
  }

  
  
   

  constructor() {
    // let data = (localStorage.getItem("formdata") ? localStorage.getItem("formdata") : "{}") as string;
    // this.formdata = JSON.parse(data);
   }

  ngOnInit(): void {
  }
  // cha(){
  //   // localStorage.getItem('value');
  //   // console.log(localStorage.getItem("formdata"));
  // // console.log(localStorage.getItem('value'));
  // var fdata=window.localStorage.getItem('value');
  // console.log(fdata);

  // // for(var key in fdata){
  // //   document.getElementById(key).innerHTML=fdata[key];
  // // }
  // }
  edit(){

  }

}
