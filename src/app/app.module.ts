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
import { HeroComponent } from './hero/hero.component';
import { MissionComponent } from './mission/mission.component';
import { FooterComponent } from './footer/footer.component';
import { DummyComponent } from './dummy/dummy.component';
import { ImpressumComponent } from './impressum/impressum.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NewsComponent,
    TeachersComponent,
    TechnologiesComponent,
    TestimonialsComponent,
    CourseComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    MissionComponent,
    DummyComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
