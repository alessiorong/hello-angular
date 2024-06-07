import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  
  students: Student[] = [];
  student = {id: 4, nome: "Pino", cognome: "Abete", linguaggioPreferito: "Python"};
  noData: string[] = [];
  age = 35;

  constructor(private studentService : StudentService){}

  ngOnInit(): void {
    let obsStud: Observable<Student[]> = this.studentService.getStudents();
    obsStud.subscribe(data => this.students = data);
  }
}

export interface Student{
  id: number,
  nome: string,
  cognome: string,
  linguaggioPreferito: string
}
