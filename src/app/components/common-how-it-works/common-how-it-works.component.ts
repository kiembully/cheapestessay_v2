import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-common-how-it-works',
  templateUrl: './common-how-it-works.component.html',
  styleUrls: ['./common-how-it-works.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonHowItWorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.timer(0)
  }

  // customOptions: any = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   autoplay: true,
  //   autoplayTimeout: 6500,
  //   navSpeed: 100,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     }
  //   },
  //   nav: false
  // }
  // activeSlides: SlidesOutputData;
  // activeItem: number = 0;
  // spinnerVal:any;

  // slidesStore: any[];
  // getPassedData(data: SlidesOutputData) {
  //   this.activeSlides = data;
  //   this.activeItem = data.startPosition;
  //   clearInterval(this.intervalId1);
  //   this.timer();
  // }
  // intervalId1: any;
  // timer(counter:number = 0) {
  //   this.spinnerVal = 0;
  //   this.intervalId1= setInterval(() => {
  //       counter = counter + 10;
  //       this.spinnerVal = Math.ceil((counter/600) * 100);
  //       if(counter === 600) clearInterval(this.intervalId1);
  //   }, 100)
  // }

}
