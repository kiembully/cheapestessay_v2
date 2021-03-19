import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let ApplyFreeQuoteComponent = class ApplyFreeQuoteComponent {
    constructor(_auth, router, dialogRef) {
        this._auth = _auth;
        this.router = router;
        this.dialogRef = dialogRef;
        this.freeQuoteForm = new FormGroup({
            email: new FormControl(''),
            fx: new FormControl('freeQuote'),
            service: new FormControl(0),
            paper: new FormControl(0),
            page: new FormControl(0),
            total: new FormControl(0),
        });
        this.couponForm = new FormGroup({
            user_token: new FormControl(''),
            order_token: new FormControl(localStorage.getItem('set_order_token')),
            coupon_code: new FormControl('frqunu15')
        });
        this.formHasError = false;
        this.errorMessage = '';
        this.isProgressLoading = false;
    }
    ngOnInit() {
        this.decoded_order_token = jwt_decode(localStorage.getItem('set_order_token'));
        this.freeQuoteForm.patchValue({
            service: this.decoded_order_token.service,
            paper: this.decoded_order_token.paper,
            page: this.decoded_order_token.page,
            total: this.decoded_order_token.total,
        });
    }
    applyFreeQuote() {
        this.isProgressLoading = true;
        this._auth.registerLogin(this.freeQuoteForm.value).subscribe(res => {
            this.isProgressLoading = false;
            this.errorMessage = res.message;
            this.formHasError = (!res.status);
            if (res.status == true) {
                localStorage.setItem('user_token', res.data);
                this.applyCoupon();
                setTimeout(() => this.dialogRef.close(), 1500);
                this.router.navigate(['order']);
            }
        });
    }
    applyCoupon() {
        this._auth.getCouponCode(this.couponForm.value).subscribe(res => {
            localStorage.setItem('discount_token', res.data.discount_token);
        });
    }
};
ApplyFreeQuoteComponent = __decorate([
    Component({
        selector: 'app-apply-free-quote',
        templateUrl: './apply-free-quote.component.html',
        styleUrls: ['./apply-free-quote.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], ApplyFreeQuoteComponent);
export { ApplyFreeQuoteComponent };
//# sourceMappingURL=apply-free-quote.component.js.map