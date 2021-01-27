import { Component, OnInit, ViewEncapsulation, Input, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { CommonPayOrderComponent } from '../common-pay-order/common-pay-order.component'
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-pay-order',
  templateUrl: './pay-order.component.html',
  styleUrls: ['./pay-order.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PayOrderComponent implements OnInit {

  @Input() public order_id: any;

  agreement = new FormControl(false);

  isProgressLoading: boolean = false;
  tabIndex: any;
  paymentMode: any;

  formUser = new FormGroup({
    user_token: new FormControl()
  })

  @ViewChild(CommonPayOrderComponent) public myChild: CommonPayOrderComponent;
  @ViewChild('paymentTabs') paymentTabs;
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent>

  constructor(private _auth: ApiServices, private router: Router, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCardDetails();
  }

  ngAfterViewInit() {
    this.tabIndex = this.paymentTabs.selectedIndex;
    this._cdr.detectChanges();
  }

  card_info: any;
  card_details: any;
  getCardDetails() {
    this.isProgressLoading = true;
    this.formUser.patchValue({
      user_token: localStorage.getItem('user_token'),
    })
    this._auth.getCardDetails(this.formUser.value).subscribe(
      res => {
        console.log(res);
        this.isProgressLoading = false;
        if (res.status) {
          this.card_details = jwt_decode(res.data.card_token);
        } else {
          this.card_details = 'No Card Details Found!'
        }
      }
    )
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.tabIndex = tabChangeEvent.index;
  }

  displayPaymentMode(id) {
    let payment_mode = '';
    payment_mode = (id == 0) ? 'Card' : 'PayPal';
    return payment_mode;
  }

}
