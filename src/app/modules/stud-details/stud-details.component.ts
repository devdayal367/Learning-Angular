import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-stud-details',
  templateUrl: './stud-details.component.html',
  styleUrls: ['./stud-details.component.scss']
})
export class StudDetailsComponent implements OnInit {
  

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    
  }
  

}
