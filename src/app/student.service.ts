import { Injectable } from '@angular/core';
import { Student } from './student-list/student-list.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // students: Student[] = [{id: 1, nome: "Ciccio", cognome:"Pasticcio", linguaggioPreferito: "Javascript"},
  //   {id: 2, nome: "Paolo", cognome: "Tavolo", linguaggioPreferito: "Java"},
  //   {id: 3, nome: "Topo", cognome: "Gigio", linguaggioPreferito: "C++"}
  // ];
  private apiUrl = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {  }
  getStudents(): Observable<Student[]> {  //Angular usa observable al posto delle promise, può ricevere puù risultati, al posto di then subscribe e può essere invocato ogni volta che arriva un risultato
    return this.http.get<Student[]>(this.apiUrl);
  }
  getStudent(id: number): Observable<Student>{
     return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }
}
