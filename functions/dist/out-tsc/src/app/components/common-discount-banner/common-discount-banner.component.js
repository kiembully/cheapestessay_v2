import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let CommonDiscountBannerComponent = class CommonDiscountBannerComponent {
    constructor(_auth, _session, router) {
        this._auth = _auth;
        this._session = _session;
        this.router = router;
        this.frmNewUser = new FormGroup({
            email: new FormControl({ value: '', disabled: !this._session.isTokenExisting('user_token') }),
            fx: new FormControl('freeQuote')
        });
        this.frmCouponCode = new FormGroup({
            order_token: new FormControl(''),
            coupon_code: new FormControl(''),
            user_token: new FormControl('')
        });
        this.isUnlocking = false;
    }
    ngOnInit() {
        this.decoded_user_token = ((!this._session.isTokenExisting('user_token'))) ? jwt_decode(localStorage.getItem('user_token')) : '';
        this.frmNewUser.patchValue({
            email: ((!this._session.isTokenExisting('user_token'))) ? this.decoded_user_token.user_details.user_email : ''
        });
    }
    submitNewUser() {
        this.isUnlocking = true;
        this.frmCouponCode.patchValue({
            order_token: localStorage.getItem('set_order_token'),
            coupon_code: 'SIGNUP15',
            user_token: ''
        });
        this._auth.registerLogin(this.frmNewUser.value).subscribe(res => {
            this.isUnlocking = false;
            if (res.status) {
                localStorage.setItem('user_token', res.data);
                this.getCouponCode(this.frmCouponCode.value);
            }
            else {
                this._session.messageSnackbar(res.message, 'OK');
            }
        });
    }
    getCouponCode(form) {
        this._auth.getCouponCode(form).subscribe(res => {
            if (res.status) {
                localStorage.setItem('discount_token', res.data.discount_token);
                this.router.navigate(['order']);
            }
            else {
                if (res.message == "Accesstoken has Expired!") {
                    this._session.openSnackBar(res.message, 'OK');
                    this.router.navigate(['/']);
                }
                else {
                    localStorage.setItem('discount_token', 'invalid');
                    this.router.navigate(['order']);
                }
            }
        });
    }
};
__decorate([
    Input()
], CommonDiscountBannerComponent.prototype, "has_image", void 0);
CommonDiscountBannerComponent = __decorate([
    Component({
        selector: 'app-common-discount-banner',
        templateUrl: './common-discount-banner.component.html',
        styleUrls: ['./common-discount-banner.component.css'],
        providers: [ApiServices, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], CommonDiscountBannerComponent);
export { CommonDiscountBannerComponent };
//# sourceMappingURL=common-discount-banner.component.js.map