import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input, ViewChild, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonPayOrderComponent } from '../common-pay-order/common-pay-order.component';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let PayOrderComponent = class PayOrderComponent {
    constructor(_auth, router, _cdr, route) {
        this._auth = _auth;
        this.router = router;
        this._cdr = _cdr;
        this.route = route;
        this.agreement = new FormControl(false);
        this.isProgressLoading = false;
        this.formUser = new FormGroup({
            user_token: new FormControl()
        });
    }
    ngOnInit() {
        this.getCardDetails();
    }
    ngAfterViewInit() {
        this.tabIndex = this.paymentTabs.selectedIndex;
        this._cdr.detectChanges();
    }
    getCardDetails() {
        this.isProgressLoading = true;
        this.formUser.patchValue({
            user_token: localStorage.getItem('user_token'),
        });
        this._auth.getCardDetails(this.formUser.value).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                this.card_details = jwt_decode(res.data.card_token);
            }
            else {
                this.card_details = 'No Card Details Found!';
            }
        });
    }
    tabChanged(tabChangeEvent) {
        this.tabIndex = tabChangeEvent.index;
    }
    displayPaymentMode(id) {
        let payment_mode = '';
        payment_mode = (id == 0) ? 'Card' : 'PayPal';
        return payment_mode;
    }
    backToDetails(id) {
        this.router.navigate(['/my-orders/order-details', id]);
    }
};
__decorate([
    Input()
], PayOrderComponent.prototype, "order_id", void 0);
__decorate([
    ViewChild(CommonPayOrderComponent)
], PayOrderComponent.prototype, "myChild", void 0);
__decorate([
    ViewChild('paymentTabs')
], PayOrderComponent.prototype, "paymentTabs", void 0);
__decorate([
    Output()
], PayOrderComponent.prototype, "selectedTabChange", void 0);
PayOrderComponent = __decorate([
    Component({
        selector: 'app-pay-order',
        templateUrl: './pay-order.component.html',
        styleUrls: ['./pay-order.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], PayOrderComponent);
export { PayOrderComponent };
//# sourceMappingURL=pay-order.component.js.map