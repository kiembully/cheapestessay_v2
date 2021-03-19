import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let UserCouponComponent = class UserCouponComponent {
    constructor(_auth, _session, dialog, dialogRef) {
        this._auth = _auth;
        this._session = _session;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.couponForm = new FormGroup({
            user_token: new FormControl(''),
            order_token: new FormControl(''),
            coupon_code: new FormControl('')
        });
        this.errorState = false;
        this.submitState = false;
        this.errorMessage = '';
        this.isProgressLoading = false;
        this.is_coupon_applied = false;
    }
    ngOnInit() {
        if (localStorage.getItem('discount_token') == 'invalid') {
            this.couponForm.patchValue({
                user_token: localStorage.getItem('user_token'),
                coupon_code: 'NWSLTTR15%',
                order_token: localStorage.getItem('set_order_token'),
            });
            this.errorState = true;
            this.errorMessage = 'This coupon is for first time user only.';
        }
        else {
            this.couponForm.patchValue({
                user_token: (localStorage.getItem('user_token') == null) ? '' : localStorage.getItem('user_token'),
                coupon_code: (localStorage.getItem('discount_token') == null) ? this.initializeCouponCode() : this.getDecodedCouponToken(),
                order_token: localStorage.getItem('set_order_token'),
            });
        }
    }
    initializeCouponCode() {
        this.is_coupon_applied = false;
        let coupon = '';
        switch (this.coupon_state) {
            case 0: {
                coupon = 'NWSLTTR15%';
                return coupon;
            }
            case 1: {
                coupon = '';
                return coupon;
            }
        }
    }
    getDecodedCouponToken() {
        this.is_coupon_applied = true;
        let decoded_coupon_token = jwt_decode(localStorage.getItem('discount_token'));
        return decoded_coupon_token.coupon_code;
    }
    submitCoupon() {
        this.isProgressLoading = true;
        this._auth.getCouponCode(this.couponForm.value).subscribe(res => {
            if (res.status) {
                localStorage.removeItem('discount_token');
                localStorage.setItem('discount_token', res.data.discount_token);
                this.submitState = true;
                this.errorState = false;
                this.errorMessage = res.message;
                this.isProgressLoading = false;
                setTimeout(() => this.dialogRef.close(), 1500);
            }
            else {
                if (res.message == "Accesstoken has Expired!") {
                    this._session.openSnackBar(res.message, 'OK');
                }
                else {
                    this.errorState = true;
                    this.errorMessage = res.message;
                    this.isProgressLoading = false;
                }
            }
        });
    }
};
__decorate([
    Input()
], UserCouponComponent.prototype, "coupon_state", void 0);
UserCouponComponent = __decorate([
    Component({
        selector: 'app-user-coupon',
        templateUrl: './user-coupon.component.html',
        styleUrls: ['./user-coupon.component.css'],
        providers: [ApiServices, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], UserCouponComponent);
export { UserCouponComponent };
//# sourceMappingURL=user-coupon.component.js.map