import { __decorate, __param } from "tslib";
import { Component, HostListener, Inject, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { loggedin_session } from '../../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let NewOrderOutputComponent = class NewOrderOutputComponent {
    constructor(document, dialog, _auth, _session, router) {
        this.document = document;
        this.dialog = dialog;
        this._auth = _auth;
        this._session = _session;
        this.router = router;
        this.user_token = new FormGroup({
            user_token: new FormControl(this._auth.getToken()),
        });
        this.save_order = new FormGroup({
            user_token: new FormControl(''),
            order_id: new FormControl(),
            uploaded_token: new FormControl(''),
            order_token: new FormControl('')
        });
        this.openCouponDialog = new EventEmitter();
        this.isFixed = false;
    }
    ngOnInit() {
        this.decoded_user_token = (this.isUserOnline) ? jwt_decode(localStorage.getItem('user_token')) : '';
    }
    ngOnDestroy() {
        localStorage.removeItem('is_submitting');
    }
    getService(val) {
        let value;
        switch (val) {
            case 1: {
                value = 'Editing';
                return value;
            }
            case 2: {
                value = 'PowerPoint';
                return value;
            }
            case 3: {
                value = 'Writing';
                return value;
            }
        }
    }
    getAcademicLevel(val) {
        let value;
        switch (val) {
            case 1: {
                value = 'Bachelor';
                return value;
            }
            case 2: {
                value = 'Master';
                return value;
            }
            case 3: {
                value = 'College';
                return value;
            }
        }
    }
    change_position(e) {
        let state;
        state = (this.isUserOnline ? state = (e >= 518) ? true : false : state = (e >= 345) ? true : false);
        return state;
    }
    onWindowScroll() {
        this.isFixed = this.change_position(window.pageYOffset);
    }
    getListVisibility(e) {
        let val;
        if (typeof e === 'boolean') {
            val = (e) ? val = true : val = false;
        }
        else {
            val = (e > 0) ? val = true : val = false;
        }
        return val;
    }
    getTotalValue(base, multiplier) {
        let value = base * multiplier;
        value = Math.round((value + Number.EPSILON) * 100) / 100;
        return value;
    }
    proceedPayment(id) {
        this.router.navigate(['/my-orders/order-details', id]);
    }
    saveOrder() {
        let isEditing = ((localStorage.getItem('is_editing') === 'true') ? true : false);
        localStorage.setItem('is_submitting', (isEditing ? 'true' : 'false'));
        this._auth.saveOrder(this.patchSaveOrderForm()).subscribe(res => {
            if (res.status) {
                localStorage.removeItem('set_order_token');
                this.router.navigate(['/my-orders/order-details', res.data.order_id]);
            }
            else {
                this._session.messageSnackbar(res.message, 'OK');
            }
        });
    }
    patchSaveOrderForm() {
        this.save_order.patchValue({
            user_token: localStorage.getItem('user_token'),
            order_id: !this._session.isTokenExisting('order_token') ? jwt_decode(localStorage.getItem('order_token')).order_id : null,
            uploaded_token: !this._session.isTokenExisting('uploaded_token') ? localStorage.getItem('uploaded_token') : '',
            order_token: localStorage.getItem('set_order_token'),
        });
        return this.save_order.value;
    }
    getCouponState() {
        let discount_token = localStorage.getItem('discount_token');
        let is_user_active = !this._session.isTokenExisting('user_token');
        if (is_user_active) {
            if (discount_token == null) {
                return 'Have a Coupon Code?';
            }
            else if (discount_token == 'invalid') {
                this.coupon_state = 1;
                return 'Coupon Code was not Applied. (?)';
            }
            else {
                return 'Coupon Applied!';
            }
        }
        else {
            if (discount_token == null) {
                this.coupon_state = 0;
                return 'Apply First time Coupon?';
            }
            else {
                return 'Coupon Applied!';
            }
        }
    }
    getLifeTimeDiscount() {
        let decoded_token = jwt_decode(localStorage.getItem('set_order_token'));
        return decoded_token.life_time_Disc;
    }
    filterExtrasIfFree(val) {
        return (val == 'Free') ? val : '$' + val;
    }
};
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "isUserOnline", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "order_data", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "total_price", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "price_saved", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "order_output", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "plagiarism", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "plagiarism_cost", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "abstract", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "abstract_cost", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "email", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "email_cost", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "page_cost", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "slide_cost", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "chart_cost", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "in_top10", void 0);
__decorate([
    Input()
], NewOrderOutputComponent.prototype, "disableSaving", void 0);
__decorate([
    Output('openCouponDialog')
], NewOrderOutputComponent.prototype, "openCouponDialog", void 0);
__decorate([
    HostListener('window:scroll', [])
], NewOrderOutputComponent.prototype, "onWindowScroll", null);
NewOrderOutputComponent = __decorate([
    Component({
        selector: 'app-new-order-output',
        templateUrl: './new-order-output.component.html',
        styleUrls: ['./new-order-output.component.css'],
        providers: [ApiServices, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    }),
    __param(0, Inject(DOCUMENT))
], NewOrderOutputComponent);
export { NewOrderOutputComponent };
//# sourceMappingURL=new-order-output.component.js.map