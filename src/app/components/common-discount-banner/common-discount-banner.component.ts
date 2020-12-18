import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-discount-banner',
  templateUrl: './common-discount-banner.component.html',
  styleUrls: ['./common-discount-banner.component.css']
})
export class CommonDiscountBannerComponent implements OnInit {

  @Input() public has_image: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }



}
