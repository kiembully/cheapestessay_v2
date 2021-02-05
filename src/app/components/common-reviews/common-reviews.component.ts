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

  clientReviews: OwlOptions = {
    loop: true,
    dots: false,
    margin: 20,
    nav: false,
    center:true,
    responsive:{
      0:{
          items:2,
          dots: true, 
      },
      768:{
          items:3,
          dots: true,
      }
    }
  }

}
