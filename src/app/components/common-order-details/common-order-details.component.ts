import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-common-order-details',
  templateUrl: './common-order-details.component.html',
  styleUrls: ['./common-order-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommonOrderDetailsComponent implements OnInit {

  @Input() public order_details: any;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
