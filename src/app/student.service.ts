import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList = [
    {id:1 , name : 'Dayal' ,  mark1 : 40, mark2 : 80},
    {id:1 , name : 'Akhil' ,  mark1 : 43, mark2 : 59},
    {id:1 , name : 'Rahul' ,  mark1 : 39, mark2 : 65},
    {id:1 , name : 'Riya' ,  mark1 : 48, mark2 : 70}
  ]


  constructor() { }
  calculateTotal(student: any) {
    alert(student.mark1+student.mark2)
  }
}
