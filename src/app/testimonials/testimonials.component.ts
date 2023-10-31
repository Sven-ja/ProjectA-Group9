import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  
  ngOnInit() {
    // Hier kannst du Code ausführen, der beim Initialisieren der Komponente ausgeführt werden soll
  }

  ngAfterViewInit() {
    const testimonialCarousel = document.querySelector(".testimonial-carousel");
    
    if (testimonialCarousel) {
      const prevButton = document.querySelector(".prev-slide");
      const nextButton = document.querySelector(".next-slide");

      if (prevButton) {
        // Event-Handler für den "Prev"-Button
        prevButton.addEventListener("click", () => {
          const testimonials = testimonialCarousel.querySelectorAll(".testimony-slide");
          let currentTestimonialIndex = Array.from(testimonials).findIndex(testimonial => testimonial.classList.contains("active"));
          testimonials[currentTestimonialIndex].classList.remove("active");
          currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
          testimonials[currentTestimonialIndex].classList.add("active");
        });
      }

      if (nextButton) {
        // Event-Handler für den "Next"-Button
        nextButton.addEventListener("click", () => {
          const testimonials = testimonialCarousel.querySelectorAll(".testimony-slide");
          let currentTestimonialIndex = Array.from(testimonials).findIndex(testimonial => testimonial.classList.contains("active"));
          testimonials[currentTestimonialIndex].classList.remove("active");
          currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
          testimonials[currentTestimonialIndex].classList.add("active");
        });
      }
    }
  }
}
