import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {
  
  constructor(private mcqservice :MCQService) { }

  ngOnInit() {
  }
  updatequestion(Qno,question,option1,option2,option3,option4,keyanswer){
    this.mcqservice.update(Qno,question,option1,option2,option3,option4,keyanswer).subscribe(res =>{
       
       // console.log("componentes :"+Qno,question,option1,option2,option3,option4,keyanswer);
     },
   error =>{
    //  console.log("unable to update");
   })
 
    console.log("components"+Qno,question,option1,option2,option3,option4,keyanswer)
   }
}
