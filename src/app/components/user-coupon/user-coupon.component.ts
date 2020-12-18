import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CommonDialogComponent} from '../../dialogs/common-dialog/common-dialog.component';
// @ts-ignore  
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-coupon',
  templateUrl: './user-coupon.component.html',
  styleUrls: ['./user-coupon.component.css'],
  providers: [ApiServices, loggedin_session],
  encapsulation: ViewEncapsulation.None,
})
export class UserCouponComponent implements OnInit {

  @Input() public coupon_state: any;

  couponForm = new FormGroup({
    user_token: new FormControl(''),
    order_token: new FormControl(''),
    coupon_code: new FormControl('')
  })

  errorState:boolean = false;
  submitState: boolean = false;
  errorMessage:any = '';
  isProgressLoading:boolean = false;

  constructor(
    private _auth: ApiServices,
    private _session: loggedin_session,
    public dialog: MatDialog,
    public dialogRef:MatDialogRef<CommonDialogComponent>,) { }

  ngOnInit(): void {
    if (localStorage.getItem('discount_token') == 'invalid') {
      this.couponForm.patchValue({
        user_token: localStorage.getItem('user_token'),
        coupon_code: 'NWSLTTR15%',
        order_token: localStorage.getItem('set_order_token'),
      })
      this.errorState = true;
      this.errorMessage = 'This coupon is for first time user only.';
    } else {
      this.couponForm.patchValue({
        user_token: (localStorage.getItem('user_token') == null) ? '' : localStorage.getItem('user_token'),
        coupon_code: (localStorage.getItem('discount_token') == null) ? this.initializeCouponCode() : this.getDecodedCouponToken(),
        order_token: localStorage.getItem('set_order_token'),
      })
    }
  }

  is_coupon_applied: boolean = false;
  initializeCouponCode() {
    this.is_coupon_applied = false;
    let coupon = '';
    switch (this.coupon_state) {
      case 0: {
        coupon = 'NWSLTTR15%';
        return coupon;
      } case 1: {
        coupon = '';
        return coupon;
      }
    }
  }

  getDecodedCouponToken() {
    this.is_coupon_applied = true;
    let decoded_coupon_token = jwt_decode(localStorage.getItem('discount_token'))
    return decoded_coupon_token.coupon_code;
  }

  submitCoupon() {
    this.isProgressLoading = true;
    this._auth.getCouponCode(this.couponForm.value).subscribe(res=> {
      if (res.status == true) {
        localStorage.removeItem('discount_token');
        localStorage.setItem('discount_token', res.data.discount_token);
        this.submitState = true;
        this.errorState = false;
        this.errorMessage = res.message;
        this.isProgressLoading = false;
        setTimeout(() => this.dialogRef.close(), 1500)
      } else {
        if (res.message == "Accesstoken has Expired!") {
          this._session.openSnackBar(res.message, 'OK')
        } else {
          this.errorState = true;
          this.errorMessage = res.message;
          this.isProgressLoading = false;
        }
      }
    })
  }

}
