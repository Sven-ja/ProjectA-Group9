import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
// Vorherige Importe und Deklarationen...

export class TestimonialsComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    // Hier kannst du Code ausführen, der beim Initialisieren der Komponente ausgeführt werden soll
  }

  ngAfterViewInit() {
    // Hier füge den JavaScript-Code ein

    // Finde die HTML-Elemente
    const nextButton = document.querySelector('.next') as HTMLElement;
    const prevButton = document.querySelector('.prev') as HTMLElement;
    const person1 = document.querySelector('#person1') as HTMLElement;
    const person2 = document.querySelector('#person2') as HTMLElement;
    const person3 = document.querySelector('#person3') as HTMLElement;

    // Array, das die Personen-Elemente in der gewünschten Reihenfolge enthält
    const persons = [person1, person2, person3];
    let currentIndex = 0; // Aktueller Index der angezeigten Person

    // Funktion zum Anzeigen der Person mit dem gegebenen Index
    function showPerson(index: number) {
      persons.forEach((person, i) => {
        if (i === index) {
          person.style.display = 'block';
        } else {
          person.style.display = 'none';
        }
      });
    }

    // Next-Button-Klick-Ereignis
    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % persons.length;
      showPerson(currentIndex);
    });

    // Previous-Button-Klick-Ereignis
    prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + persons.length) % persons.length;
      showPerson(currentIndex);
    });

    // Zeige die erste Person an (Startzustand)
    showPerson(currentIndex);
  }
}
