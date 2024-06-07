import { Component, OnInit } from '@angular/core';
import { Student } from '../student-list/student-list.component';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  student: Student|undefined;
  constructor(private studentService: StudentService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get("id");
    if(id){                               //+id converte a stringa in number se no Number(id) 
      this.studentService.getStudent(+id).subscribe(data => this.student = data);
    }
  }
}

