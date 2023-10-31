import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // Initialisiere den Slider, wenn die Komponente bereit ist
    this.initTestimonials();
  }

  initTestimonials() {
    const owl = $('.testimonial-carousel');
    owl.owlCarousel({
      items: 1,
      loop: false,
      nav: true,
      dots: false
    });

    // Starte mit der Anzeige der ersten Person
    $('#person1').show();
    $('#person2, #person3').hide();

    // Klickereignishandler für den "Next"-Pfeil
    $('.next-slide').click((e: any) => {
      e.preventDefault();
      // Verberge die aktuell angezeigte Person
      $('.testimony-slide.active').hide().removeClass('active');

      // Zeige die nächste Person an
      if ($('#person1').is(':visible')) {
        $('#person2').show().addClass('active');
      } else if ($('#person2').is(':visible')) {
        $('#person3').show().addClass('active');
      } else {
        $('#person1').show().addClass('active');
      }
    });
  }
}
