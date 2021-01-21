import { Component, OnInit, HostListener, Inject, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { ApiServices } from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
import { Router } from '@angular/router';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-new-order-output',
  templateUrl: './new-order-output.component.html',
  styleUrls: ['./new-order-output.component.css'],
  providers: [ApiServices, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class NewOrderOutputComponent implements OnInit {

  user_token = new FormGroup({
    user_token: new FormControl(this._auth.getToken()),
  })
  save_order = new FormGroup({
    user_token: new FormControl(''),
    order_id: new FormControl(),
    uploaded_token: new FormControl(''),
    order_token: new FormControl('')
  })

  decoded_user_token: any;

  // check if user is active
  @Input() public isUserOnline: boolean;
  // contains order information
  @Input() public order_data:any;
  @Input() public total_price:any;
  @Input() public price_saved:any;
  @Input() public order_output:any;
  @Input() public plagiarism:any;
  @Input() public abstract:any;
  @Input() public email:any;
  @Input() public page_cost:any;
  @Input() public slide_cost:any;
  @Input() public chart_cost:any;
  @Output('openCouponDialog') openCouponDialog: EventEmitter<any> = new EventEmitter();

  constructor(
      @Inject(DOCUMENT) private document: Document,
      public dialog: MatDialog,
      private _auth: ApiServices,
      public _session: loggedin_session,
      private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.decoded_user_token = (this.isUserOnline) ? jwt_decode(localStorage.getItem('user_token')) : '';
  }

  getService(val) {
    let value:any;
    switch(val) {
      case 1: { value = 'Editing'; return value }
      case 2: { value = 'PowerPoint'; return value }
      case 3: { value = 'Writing'; return value }
    }
  }
  getAcademicLevel(val) {
    let value: any;
    switch(val) {
      case 1: { value = 'Bachelor'; return value }
      case 2: { value = 'Master'; return value }
      case 3: { value = 'College'; return value }
    }
  }
  
  isFixed:boolean = false;
  change_position(e) {
    let state: boolean;
    state = (this.isUserOnline ? state = (e >= 518) ? true : false : state = (e >= 345) ? true : false )
    return state;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = this.change_position(window.pageYOffset)
  }
  
  getListVisibility(e) {
    let val:any;
    if (typeof e === 'boolean') {
      val = (e) ? val = true: val = false;
    } else {
      val = (e>0) ? val = true : val = false;
    }
    return val;
  }

  getTotalValue(base, multiplier) {
    let value = base * multiplier;
    value = Math.round((value + Number.EPSILON) * 100) / 100;
    return value;
  }

  proceedPayment(id) {
    this.router.navigate(['/my-orders/order-details', id])
  }

  saveOrder() {
    let isEditing = ((localStorage.getItem('is_editing')==='true') ? true : false)
    localStorage.setItem('is_submitting', (isEditing?'true':'false'))

    this._auth.saveOrder(this.patchSaveOrderForm()).subscribe(
      res => {
        if (res.status) {
          this.router.navigate(['/my-orders/order-details', res.data.order_id])
        }
      }
    )
  }
  
  patchSaveOrderForm() {
    this.save_order.patchValue({
      user_token: localStorage.getItem('user_token'),
      order_id: !this._session.isTokenExisting('order_token') ? jwt_decode(localStorage.getItem('order_token')).order_id : null,
      uploaded_token: !this._session.isTokenExisting('uploaded_token') ? localStorage.getItem('uploaded_token') : '',
      order_token: localStorage.getItem('set_order_token'),
    })
    return this.save_order.value;
  }

  coupon_state:any;
  getCouponState() {
    let discount_token = localStorage.getItem('discount_token');
    let is_user_active = !this._session.isTokenExisting('user_token');
    if (is_user_active) {
      if (discount_token == null) {
        return 'Have a Coupon Code?'
      } else if (discount_token == 'invalid') {
        this.coupon_state = 1;
        return 'Coupon Code was not Applied. (?)'
      }
       else {
        return 'Coupon Applied!'
      }
    } else {
      if (discount_token == null) {
        this.coupon_state = 0;
        return 'Apply First time Coupon?'
      } else {
        return 'Coupon Applied!'
      }
    }
  }
}