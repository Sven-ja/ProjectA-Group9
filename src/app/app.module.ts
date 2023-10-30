import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CourseComponent } from './course/course.component';
=======
import { TechnologiesComponent } from './technologies/technologies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
>>>>>>> 0c6a605f9f1d146c3b804cc80691a2a332aeb71e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CourseComponent
=======
    TechnologiesComponent,
    TestimonialsComponent
>>>>>>> 0c6a605f9f1d146c3b804cc80691a2a332aeb71e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
