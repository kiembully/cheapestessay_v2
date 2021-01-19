import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-order-details-payment',
  templateUrl: './common-order-details-payment.component.html',
  styleUrls: ['./common-order-details-payment.component.css']
})
export class CommonOrderDetailsPaymentComponent implements OnInit {

  @Input() public order_details:any;

  constructor() { }

  ngOnInit(): void {
  }

}
