import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewsComponent } from './news/news.component';
import { TeachersComponent } from './teachers/teachers.component';

import { TechnologiesComponent } from './technologies/technologies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NewsComponent,
    TeachersComponent,
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
