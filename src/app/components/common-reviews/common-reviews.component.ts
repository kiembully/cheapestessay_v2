import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-common-reviews',
  templateUrl: './common-reviews.component.html',
  styleUrls: ['./common-reviews.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 10,
    center: true,
    navSpeed: 700,
    items: 2,
    nav: false
  }

}
