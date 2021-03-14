import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiServices } from 'src/app/api.service';

@Component({
  selector: 'app-common-overlapping-carousel',
  templateUrl: './common-overlapping-carousel.component.html',
  styleUrls: ['./common-overlapping-carousel.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class CommonOverlappingCarouselComponent implements OnInit {

  @Input() is_writers: boolean;
  
  constructor(
    private _auth: ApiServices
  ) { }

  ngOnInit(): void {
    if (this.is_writers) {
      this.getTopWriters();
    }
  }

  topWriters:any = [];
  getTopWriters() {
    this._auth.getTopWriters().subscribe(
      res => {
        this.topWriters = res.data;
      }
    )
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
