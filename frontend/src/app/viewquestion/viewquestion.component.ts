import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';
@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {
private myarray:any;
  constructor(private mcqservice :MCQService) { }


  ngOnInit() {
    this.viewall();
  }


  viewall()
  {
    this.mcqservice.read().subscribe(
      data => {
        console.log(data)
        this.myarray = data;
      },
      error =>
      {
         console.log(error);
      }

    )
}
}
