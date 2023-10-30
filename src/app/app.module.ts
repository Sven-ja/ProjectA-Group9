import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { CourseComponent } from './course/course.component';
import { NewsComponent } from './news/news.component';
import { TeachersComponent } from './teachers/teachers.component';
=======
=======

>>>>>>> a83264f43694a9cfa7865d161b2dd352177e4aa9
import { TechnologiesComponent } from './technologies/technologies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    CourseComponent,
NewsComponent,
TeachersComponent
=======
=======
>>>>>>> a83264f43694a9cfa7865d161b2dd352177e4aa9
    TechnologiesComponent,
    TestimonialsComponent,
    CourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
