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


    let images = document.querySelectorAll(".carousel .slides img");
    let overlays = document.querySelectorAll(".carousel .bar");
    let links = document.querySelectorAll(".carousel .nav-link");
    let index = links.length;



    function onScreen(activeIndex : number) {


      links.forEach(link => link.classList.remove("active"));
      links[activeIndex].classList.add("active");
      console.log("dddddd");

    };


  };



}
