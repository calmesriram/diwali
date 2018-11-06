import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mcqservice :MCQService) { }
  ngOnInit() {
  }

   login(username,password)
  {
    this.mcqservice.loginusers(username,password).subscribe(data =>{
      console.log(data +"data login from component");
     },
    err=>{
      console.log(err +"err login from component");
    }
    )
  }

}
