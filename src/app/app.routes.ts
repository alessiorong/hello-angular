import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {path: '', component: StudentListComponent},
    //{path: 'pasticcio', component: StudentComponent}
];
