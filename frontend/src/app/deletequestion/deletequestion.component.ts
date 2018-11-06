import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';
@Component({
  selector: 'app-deletequestion',
  templateUrl: './deletequestion.component.html',
  styleUrls: ['./deletequestion.component.css']
})
export class DeletequestionComponent implements OnInit {

  constructor(private mcqservice :MCQService) { }

  ngOnInit() {
  }

  deletequestion(Qno){
    this.mcqservice.delete(Qno).subscribe(res =>{
       
       // console.log("componentes :"+Qno,question,option1,option2,option3,option4,keyanswer);
     },
   error =>{
    //  console.log("unable to delete");
   })
 
    console.log("components"+Qno)
   }
}
