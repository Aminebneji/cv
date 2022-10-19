import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {



  };


  public onScreen(activeIndex: number) {
    let images = document.querySelectorAll(".carousel .slides img");
    let overlays = document.querySelectorAll(" .carousel .overlays section");
    let links = document.querySelectorAll(".carousel .nav-link");
    let index = links.length;

    links.forEach(link => link.classList.remove("active"));
    links[activeIndex].classList.add("active");
    console.log("dddddd");

    images.forEach(image => image.classList.remove("active"));
    images[activeIndex].classList.add("active");

    overlays.forEach(overlay => overlay.classList.remove("active"));
    overlays[activeIndex].classList.add("active");

    let activated = document.querySelector<HTMLElement>('.active')!;

    activated.style.opacity[1];
    activated.animate([
      {
        transform: "translateX(15%)",
        opacity: 0
      },
      { transform: "translateX(0%)" }
    ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    let activatedOverlay = document.querySelector<HTMLElement>('.overlays .active');
    activatedOverlay?.animate([
      {
        transform: "translateX(-90%)",
        opacity: 0
      },
      {
        transform: "translateX(0)"
      }
    ],
      {
        duration: 930,
        easing: "ease-out",
        fill: "forwards"
      }
    )

  };
}



