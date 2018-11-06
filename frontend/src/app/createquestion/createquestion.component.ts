import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';


@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {

  constructor(private mcqservice :MCQService) { }

  ngOnInit() {
  }
  createquestion(Qno,question,option1,option2,option3,option4,keyanswer){
   this.mcqservice.create(Qno,question,option1,option2,option3,option4,keyanswer).subscribe(res =>{
      
      // console.log("componentes :"+Qno,question,option1,option2,option3,option4,keyanswer);
    },
  error =>{
    // console.log("unable to save");
  })

   console.log("components"+Qno,question,option1,option2,option3,option4,keyanswer)
  }

}


