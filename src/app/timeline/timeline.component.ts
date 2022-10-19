import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { windowToggle } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    let timeline: any = document.querySelector('.timeline-container');
    let timelineItems: any = document.querySelectorAll('.timeline-item');
    let timelineOffsets: any[] = [];


    // Appliquer le style active sur le premier item
    timelineItems[0].classList.add('timeline-item--active');
    // timeline.style.backgroundImage = `url('${timelineItems[0].querySelector('img.timeline__img').src}')`;

    // Récupération du offset de chaque timeline
    for (let i = 0; i < timelineItems.length; i++) {
      let item = timelineItems[i];
      timelineOffsets[i] = item.offsetTop;
    }

    // Lors du scroll dans la fenêtre
    window.onscroll = function (e: any) {
      console.log(window.scrollY)
      for (let i = 0; i < timelineOffsets.length; i++) {
        // console.log(timelineOffsets[i])

        let itemImgUrl = `url('${timelineItems[i].querySelector('img.timeline__img').src}')`;

        if (window.scrollY > timelineOffsets[i]) {
          timelineItems[i].classList.add('timeline-item--active')
          timeline.style.backgroundImage = itemImgUrl;
        }
        if (window.scrollY >= timelineOffsets[i + 1]) {
          timelineItems[i].classList.remove('timeline-item--active')
          timeline.style.backgroundImage = 'none';
        }
      }
    }


  }
}




