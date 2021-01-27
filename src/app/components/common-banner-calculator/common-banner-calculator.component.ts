import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import {new_order_form_default} from 'src/app/data/data';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { loggedin_session } from '../../data/ui-services';
import {MatDialog} from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-common-banner-calculator',
  templateUrl: './common-banner-calculator.component.html',
  styleUrls: ['./common-banner-calculator.component.css'],
  providers: [ApiServices, new_order_form_default, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class CommonBannerCalculatorComponent implements OnInit {
  // assigning order default values
  setOrderForm = this._data.setOrders;
  total_price: any;
  discounted_price: any;

  // removes element if this component is not in home
  @Input() public isHome:boolean;

  constructor(private _auth: ApiServices, private _data: new_order_form_default, private router: Router, public _session: loggedin_session, public dialog: MatDialog) { }

  isSubmitDisabled:boolean = false;
  decoded_user_token: any;
  logged_email: any;
  ngOnInit(): void {
    this.decoded_user_token = ((!this._session.isTokenExisting('user_token'))) ? jwt_decode(localStorage.getItem('user_token')) : '';
    this.logged_email = ((!this._session.isTokenExisting('user_token'))) ? this.decoded_user_token.user_details.user_email : '';
    localStorage.removeItem('discount_token');
    this.getServices();
    this.setOrder(this.setOrderForm.value);
    this.setOrderForm.valueChanges.subscribe(
      (value:any) => {
        this.isSubmitDisabled = true;
        this.setOrder(value);
      }
    )
  }

  user_token = new FormGroup({
    user_token: new FormControl(this._auth.getToken()),
  })
  order_token = new FormGroup({
    token: new FormControl(this._auth.getOrderToken())
  })

  isProgressLoading: boolean = false;
  p_paper:any;
  o_paper:any;
  deadline:any;
  pages:any;
  deadline_format: any;
  getServices() {
    let token = '';
    this.isProgressLoading = true;
    this._auth.getHomeCalculator(token).subscribe(
      val => {
        this.p_paper = val[0].data;
        this.o_paper = val[1].data;
        this.deadline = val[2].data;
        this.pages = val[3].data;

        this.isProgressLoading = false;
      }
    );
  }
  
  setOrder(order_form) {
    this.total_price = '...'
    this.discounted_price = '...'
    localStorage.removeItem('set_order_token');
    this._auth.getOrderOptions(order_form).subscribe(
      val => {
        localStorage.setItem('set_order_token', val.data.order_token);
        this.order_token.patchValue({token:val.data.order_token});
        var decoded_order_token = jwt_decode(val.data.order_token);
        this.assignDeadlineLabels(decoded_order_token);
        this.isSubmitDisabled = false;
      }
    )
  }

  frmCouponCode = new FormGroup({
    order_token: new FormControl(''),
    coupon_code: new FormControl(''),
    user_token: new FormControl('')
  })
  getCouponCode(form) {
    this._auth.getCouponCode(form).subscribe(res=>{
      if (res.status) {
        localStorage.setItem('discount_token', res.data.discount_token);
        this.router.navigate(['order'])
      } else {
        if (res.message == "Accesstoken has Expired!") {
          this._session.openSnackBar(res.message, 'OK')
          this.router.navigate(['/']);
        } else {
          localStorage.setItem('discount_token', 'invalid');
          this.router.navigate(['order'])
        }
      }
    })
  }

  deadline_value:any;
  assignDeadlineLabels(res) {
    this.deadline_value = this.getDeadlineActive(res.deadline, res.duration);
    this.deadline_format = res.deadlineLable;
    this.total_price = res.price_without_discount;
    this.discounted_price = this.total_price - (this.total_price * 0.15);
    this.discounted_price = Math.round((this.discounted_price + Number.EPSILON) * 100) / 100;
  }

  getDeadlineActive(time:any, duration:string) {
    let value:any;
    if (time == 3) {
      value = ((time == 3) && (duration == 'Hours')) ? 0 : 5;
    } else {
      if(time == 6) {value = 1}
      else if(time == 12) {value = 2}
      else if(time == 24) {value = 3}
      else if(time == 48) {value = 4}
      else if(time == 4) {value = 6}
      else if(time == 5) {value = 7}
      else if(time == 7) {value = 8}
      else if(time == 10) {value = 9}
      else if(time == 14) {value = 10}
      else {value = 11}
    }
    return value;
  }
  
  patchDeadline(list) {
    this.setOrderForm.patchValue({
      deadline: list.deadline,
      duration: list.duration
    })
  }

  openFreeQuote() {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '435px',
      width: '450px',
      backdropClass: 'common-dialog',
      panelClass: 'panel-dialog',
      data: {
        // displays apply-free-quote component
        content_id: 7
      }
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  frmSignUp = new FormGroup({
    email: new FormControl(''),
    fx: new FormControl('freeQuote'),
  })
  isUnlocking: boolean = false;
  unlockSignupCode(e) {
    this.isUnlocking = true;
    this.frmSignUp.patchValue({email:e})
    this.frmCouponCode.patchValue({
      order_token: localStorage.getItem('set_order_token'),
      coupon_code: 'SIGNUP15',
      user_token: ''
    })
    this._auth.registerLogin(this.frmSignUp.value).subscribe(
      res => {
        this.isUnlocking = false;
        if (res.status) {
          localStorage.setItem('user_token', res.data);
          this.getCouponCode(this.frmCouponCode.value)
        } else {
          this._session.messageSnackbar(res.message, 'OK')
        }
      }
    )
  }

  // submit form
  submitOrder() {
    this.frmCouponCode.patchValue({
      order_token: localStorage.getItem('set_order_token'),
      coupon_code: 'NWSLTTR15%',
      user_token: (!this._session.isTokenExisting('user_token') ? localStorage.getItem('user_token') : ''),
    })
    this.getCouponCode(this.frmCouponCode.value);
  }
}