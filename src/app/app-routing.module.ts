import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: "", component: NavbarComponent
  }, {
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
