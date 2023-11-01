import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // navigateToSection(sectionId: string): void {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  navigateToSection(sectionId: string): void {
    // -15 is coming from the CSS where the Navbar gets an height of 15vh; the +1 makes it look a bit nicer
    const yOffset = (-15 * window.innerHeight / 100) + 1;
    const element = document.getElementById(sectionId);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
  }
}
