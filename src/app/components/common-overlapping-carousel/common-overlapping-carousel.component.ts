import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-common-overlapping-carousel',
  templateUrl: './common-overlapping-carousel.component.html',
  styleUrls: ['./common-overlapping-carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonOverlappingCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orderWritten: OwlOptions = {
    loop: false,
    dots: true,
    margin: 0,
    dotsEach: true,
    startPosition: 1,
    nav: false,
    center:true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    },
  }

}
