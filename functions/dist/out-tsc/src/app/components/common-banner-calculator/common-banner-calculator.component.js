import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default, service_object } from 'src/app/data/data';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
import { CommonDialogComponent } from '../../dialogs/common-dialog/common-dialog.component';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let CommonBannerCalculatorComponent = class CommonBannerCalculatorComponent {
    constructor(_auth, _data, router, _session, _service, dialog, route) {
        this._auth = _auth;
        this._data = _data;
        this.router = router;
        this._session = _session;
        this._service = _service;
        this.dialog = dialog;
        this.route = route;
        // assigning order default values
        this.setOrderForm = this._data.setOrders;
        this.isSubmitDisabled = false;
        this.user_token = new FormGroup({
            user_token: new FormControl(this._auth.getToken()),
        });
        this.order_token = new FormGroup({
            token: new FormControl(this._auth.getOrderToken())
        });
        this.isProgressLoading = false;
        this.service = this._service.service;
        this.frmCouponCode = new FormGroup({
            order_token: new FormControl(''),
            coupon_code: new FormControl(''),
            user_token: new FormControl('')
        });
        this.frmSignUp = new FormGroup({
            email: new FormControl(''),
            fx: new FormControl('freeQuote'),
        });
        this.isUnlocking = false;
    }
    ngOnInit() {
        this.isUserActive = !this._session.isTokenExisting('user_token');
        this.decoded_user_token = this.isUserActive ? jwt_decode(localStorage.getItem('user_token')) : '';
        this.logged_email = this.isUserActive ? this.decoded_user_token.user_details.user_email : '';
        localStorage.removeItem('discount_token');
        this.setOrderForm.patchValue({ user_token: (this.isUserActive) ? localStorage.getItem('user_token') : '' });
        this.getServices();
        this.setSelectedService();
        this.setOrder(this.setOrderForm.value);
        this.setOrderForm.valueChanges.subscribe((value) => {
            this.isSubmitDisabled = true;
            this.setOrder(value);
        });
    }
    getServices() {
        let token = '';
        this.isProgressLoading = true;
        this._auth.getHomeCalculator(token).subscribe(val => {
            this.p_paper = val[0].data;
            this.o_paper = val[1].data;
            this.deadline = val[2].data;
            this.pages = val[3].data;
            let param = this.route.snapshot.paramMap.get('id');
            this.isProgressLoading = false;
        });
    }
    setSelectedService() {
        let param = this.route.snapshot.paramMap.get('id');
        let id = 3;
        for (let i = 0; i < this.service.length; i++) {
            if (this.service[i].name == param) {
                id = this.service[i].id;
                this.setOrderForm.patchValue({
                    paper: id
                });
                break;
            }
        }
    }
    setOrder(order_form) {
        this.total_price = '...';
        this.discounted_price = '...';
        localStorage.removeItem('set_order_token');
        this._auth.getOrderOptions(order_form).subscribe(val => {
            localStorage.setItem('set_order_token', val.data.order_token);
            this.order_token.patchValue({ token: val.data.order_token });
            var decoded_order_token = jwt_decode(val.data.order_token);
            this.assignDeadlineLabels(decoded_order_token);
            this.isSubmitDisabled = false;
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
    assignDeadlineLabels(res) {
        this.deadline_value = this.getDeadlineActive(res.deadline, res.duration);
        this.deadline_format = res.deadlineLable;
        this.total_price = res.price_without_discount;
        let deduction = Math.round((this.total_price * 0.15) * 100) / 100;
        this.discounted_price = this.total_price - deduction;
        this.discounted_price = Math.round((this.discounted_price + Number.EPSILON) * 100) / 100;
    }
    getDeadlineActive(time, duration) {
        let value;
        if (time == 3) {
            value = ((time == 3) && (duration == 'Hours')) ? 0 : 5;
        }
        else {
            if (time == 6) {
                value = 1;
            }
            else if (time == 12) {
                value = 2;
            }
            else if (time == 24) {
                value = 3;
            }
            else if (time == 48) {
                value = 4;
            }
            else if (time == 4) {
                value = 6;
            }
            else if (time == 5) {
                value = 7;
            }
            else if (time == 7) {
                value = 8;
            }
            else if (time == 10) {
                value = 9;
            }
            else if (time == 14) {
                value = 10;
            }
            else {
                value = 11;
            }
        }
        return value;
    }
    patchDeadline(list) {
        this.setOrderForm.patchValue({
            deadline: list.deadline,
            duration: list.duration
        });
    }
    openFreeQuote() {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
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
    unlockSignupCode(e) {
        this.isUnlocking = true;
        this.frmSignUp.patchValue({ email: e });
        this.frmCouponCode.patchValue({
            order_token: localStorage.getItem('set_order_token'),
            coupon_code: 'SIGNUP15',
            user_token: ''
        });
        this._auth.registerLogin(this.frmSignUp.value).subscribe(res => {
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
    // submit form
    submitOrder() {
        this.frmCouponCode.patchValue({
            order_token: localStorage.getItem('set_order_token'),
            coupon_code: 'SIGNUP15',
            user_token: (!this._session.isTokenExisting('user_token') ? localStorage.getItem('user_token') : ''),
        });
        this.getCouponCode(this.frmCouponCode.value);
    }
};
__decorate([
    Input()
], CommonBannerCalculatorComponent.prototype, "isHome", void 0);
CommonBannerCalculatorComponent = __decorate([
    Component({
        selector: 'app-common-banner-calculator',
        templateUrl: './common-banner-calculator.component.html',
        styleUrls: ['./common-banner-calculator.component.css'],
        providers: [ApiServices, new_order_form_default, loggedin_session, service_object],
        encapsulation: ViewEncapsulation.None,
    })
], CommonBannerCalculatorComponent);
export { CommonBannerCalculatorComponent };
//# sourceMappingURL=common-banner-calculator.component.js.map