
import { Component } from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  constructor() {

  }

  ngAfterViewChecked() {

    let timeline: any = document.querySelector('.timeline-container');
    let timelineItems = document.querySelectorAll('.timeline-item');
    let timelineOffsets: Array<number> = [];
    

    // offset of each timelines
    for (let i = 0; i < timelineItems.length; i++) {
      let item: any = timelineItems[i];
      timelineOffsets[i] = item.offsetTop;
    }
        

    // when we scroll on the window
    window.onscroll = function (e) {
      for (let i = 0; i < timelineOffsets.length; i++) {

        if (window.scrollY < timeline.offsetTop + timelineOffsets[i]) {
          timelineItems[i].classList.remove('timeline-item--active');

        }
        if (window.scrollY > timeline.offsetTop + timelineOffsets[i]) {
          timelineItems[i].classList.add('timeline-item--active');
          timeline.style.backgroundImage = `('${timelineItems[i].querySelector('img.timeline__img ::before')}')` ;
        }
        if (window.scrollY >= timeline.offsetTop + timelineOffsets[i + 1]) {
           timelineItems[i].classList.remove('timeline-item--active');   
        }
        // console.log(window.scrollY, timelineOffsets[i], i, i + 1) 
      }
    }, {
      passive: true
    }
  }


}


