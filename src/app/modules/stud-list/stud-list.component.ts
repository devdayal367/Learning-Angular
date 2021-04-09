import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.scss']
})
export class StudListComponent implements OnInit {
  
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }
  
}
