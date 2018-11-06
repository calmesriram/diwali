import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MCQService {
  private baseurl:String ="http://localhost:3000";
  // private baseurl:String = " https://mynodeapptesting2.herokuapp.com";
  // private baseurl:String ="https://nodejsmlab.herokuapp.com";
  constructor(private http:HttpClient) { }
  // createusers
createusers(fullname,username,emailid,password,status,userid){
  var singup = {
    fullname:fullname,
    username:username,
    email:emailid,
    password:password,
    status:status,
    userid:userid
    
        
  }

  console.log("Service:"+singup);
  return this.http.post(this.baseurl+'/singup',singup);
}

//READ USERS
allusers(){
    
  return this.http.get(this.baseurl+'/seeusers');
}
// login users
loginusers(username,password){
  var l ={
    username:username,
    password:password
  }
  console.log("Service:"+username,password);
  return this.http.put(this.baseurl+'/loginusers',l);
}

  // READ
  read(){
    
    return this.http.get(this.baseurl+'/getquestion');
  }


//  CREATE
   create(Qno,question,option1,option2,option3,option4,keyanswer){
    var z = {
      qid:Qno,
      question:question,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4,
      keyAnswer:keyanswer    
      
    }
      console.log("Service:"+z);
  return this.http.post(this.baseurl+'/createquestion',z);
   
}
// UPDATE
update(Qno,question,option1,option2,option3,option4,keyanswer){
  var z1 = {
    question_id:Qno,
    question:question,
    option1:option1,
    option2:option2,
    option3:option3,
    option4:option4,
    keyAnswer:keyanswer    
    
  }
    console.log("Service:"+z1);
return this.http.put(this.baseurl+'/updatequestion',z1);
 
}

// DELETE

delete(Qno){
  var del:any = {
    question_id:Qno 
    
  }
    console.log("Service:"+del);
return this.http.delete(this.baseurl+'/deletequestion',del);
 
}
}



