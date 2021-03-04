import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [ApiServices],
  encapsulation: ViewEncapsulation.None,
})
export class ReviewsComponent implements OnInit {

  constructor(
    private _auth: ApiServices,
  ) { }

  ngOnInit(): void {
    this.getReviews()
  }

  getReviews() {
    this._auth.getReviews().subscribe(
      res => {
        console.log(this.splitArray(res.data));
      }
    )
  }

  splitArray(arr) {
    const result = [[], [], []] //we create it, then we'll fill it
    const n = 2;
    const objectsPerLine = Math.ceil(arr.length / 3)

    for (let line = 0; line < n; line++) {
      for (let i = 0; i < objectsPerLine; i++) {
        const value = arr[i + line * objectsPerLine]
        if (!value) continue //avoid adding "undefined" values
        result[line].push(value)
      }
    }
    return result;
  }

}
