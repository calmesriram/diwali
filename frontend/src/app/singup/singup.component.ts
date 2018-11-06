import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private mcqservice :MCQService) { }
private status:boolean =false;
private userid:Number=123;
private myarray:any;
  ngOnInit() {
    this.mcqservice.allusers().subscribe(res =>{
       this.myarray = res;
       console.log(this.myarray);
    },
    err=>{
      console.log("errror");
    })
  
  }


  singup(fullname,username,email,password)
  {
    this.status = true;
    console.log(fullname,username,email,password,status,this.userid)
    this.mcqservice.createusers(fullname,username,email,password,this.status,this.userid).subscribe(res =>{
       console.log(res+"singup form component");
      // if(res == "success")
      // {
      //   console.log("saved");
      // }
    },
    err=>{
      console.log("errror singup form component",err);
    })
  }
}
