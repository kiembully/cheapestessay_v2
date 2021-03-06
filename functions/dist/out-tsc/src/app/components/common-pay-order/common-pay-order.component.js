import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { loggedin_session } from 'src/app/data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let CommonPayOrderComponent = class CommonPayOrderComponent {
    constructor(_auth, _session, router, route) {
        this._auth = _auth;
        this._session = _session;
        this.router = router;
        this.route = route;
        this.isProgressLoading = false;
        this.isRedeemed = false;
        this.isDiscounted = false;
        this.frmRedeem = new FormGroup({
            user_token: new FormControl(''),
            order_id: new FormControl(),
            redeem: new FormControl()
        });
        this.frmPayment = new FormGroup({
            order_id: new FormControl,
            user_token: new FormControl
        });
        // payment forms
        this.frmCard = new FormGroup({
            cardnumber: new FormControl(),
            cvv: new FormControl(),
            expiry: new FormControl(),
            order_id: new FormControl(),
            redeem_amt: new FormControl(),
            user_token: new FormControl(),
        });
        this.frmPaypalAndBalance = new FormGroup({
            order_id: new FormControl(),
            redeem_amt: new FormControl(),
            user_token: new FormControl(),
        });
        this.ltTooltipMsg = 'Note: This amount will be credited to your Cheapest Essay account.';
    }
    ngOnInit() {
        this.displayBalance = this.getBalance();
        this.decoded_card_info = this.card_details;
        this.displayPaymentDetails();
    }
    getCardNumber() {
        let value = '';
        if (this.card_details == 'No Card Details Found!') {
            value = "N/A";
        }
        else {
            value = this.decoded_card_info[0].cNo.substr(this.decoded_card_info[0].cNo.length - 4);
        }
        return value;
    }
    getBalance() {
        let decoded_user_token = jwt_decode(localStorage.getItem('user_token'));
        let balance = !(decoded_user_token.account.total_balance) ? 0 : decoded_user_token.account.total_balance;
        return balance;
    }
    updateCard() {
        this.router.navigate(['/update-card', this.order_id]);
    }
    redeemAmount() {
        this.isProgressLoading = true;
        this._auth.redeemAmout(this.patchFrmRedeem()).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                let decoded_redeem_token = jwt_decode(res.data.redeem_token);
                this.isRedeemed = (this.frmRedeem.value.redeem > 0) ? true : false;
                this.displayBalance = decoded_redeem_token.balance;
                this.total = (decoded_redeem_token.total);
            }
            else {
                this._session.messageSnackbar(res.message, 'OK');
                this.frmRedeem.patchValue({ redeem: 0 });
            }
        });
    }
    returnRedeem() {
        this.frmRedeem.patchValue({
            redeem: ''
        });
        this.redeemAmount();
    }
    patchFrmRedeem() {
        this.frmRedeem.patchValue({
            user_token: localStorage.getItem('user_token'),
            order_id: this.order_id,
        });
        return this.frmRedeem.value;
    }
    displayPaymentDetails() {
        this._auth.displayOrder(this.patchFrmPayment()).subscribe(res => {
            this.order_deadline = res.data.deadlinedate;
            this.subtotal = res.data.payment.sub_total;
            this.ltDiscount = res.data.payment.ltDisc;
            this.discount = res.data.payment.coupon_discount;
            this.coupon_code = res.data.payment.coupon_code;
            this.total = (res.data.payment.total).replace('$', '');
            this.order_date = res.data.order_date;
            this.isDiscounted = (this.discount > 0) ? true : false;
        });
    }
    patchFrmPayment() {
        this.frmPayment.patchValue({
            order_id: this.order_id,
            user_token: localStorage.getItem('user_token')
        });
        return this.frmPayment.value;
    }
    payOrder() {
        this.isProgressLoading = true;
        // filter if agreement is checked 
        if (this.agreement) {
            // filter which payment is going to use (balance or outside payment)
            if (this.total <= 0) {
                this.payUsingBalance();
            }
            else {
                // filter which payment is going to use (paypal or stripe/card)
                if (this.tabIndex == 0) {
                    this.payUsingStripeCard();
                }
                else {
                    this.payUsingPaypal();
                }
            }
        }
        else {
            this._session.messageSnackbar('Check agreement', 'OK');
            this.isProgressLoading = false;
        }
    }
    patchFrmPaypalAndBalance() {
        this.frmPaypalAndBalance.patchValue({
            order_id: this.order_id,
            redeem_amt: this.frmRedeem.value.redeem,
            user_token: localStorage.getItem('user_token'),
        });
        return this.frmPaypalAndBalance.value;
    }
    patchFrmCard() {
        let data = this.decoded_card_info[0];
        this.frmCard.patchValue({
            cardnumber: data.cNo,
            expiry: data.expMonth + '/' + data.expYear,
            order_id: this.order_id,
            redeem_amt: this.frmRedeem.value.redeem,
            user_token: localStorage.getItem('user_token'),
        });
        return this.frmCard.value;
    }
    // payment options
    payUsingBalance() {
        this._auth.payUsingBalance(this.patchFrmPaypalAndBalance()).subscribe(res => {
            this.isProgressLoading = false;
            if (!res.status) {
                this._session.messageSnackbar(res.message, 'OK');
            }
            else {
                localStorage.removeItem('invoice');
                localStorage.setItem('invoice', JSON.stringify(res.data));
                localStorage.removeItem('set_order_token');
                localStorage.removeItem('order_token');
                this.router.navigate(['/invoice']);
            }
        });
    }
    payUsingStripeCard() {
        this._auth.payWithStripeCard(this.patchFrmCard()).subscribe(res => {
            this.isProgressLoading = false;
            if (!res.status) {
                this._session.messageSnackbar(res.message, 'OK');
            }
            else {
                localStorage.removeItem('invoice');
                localStorage.setItem('invoice', JSON.stringify(res.data));
                localStorage.removeItem('set_order_token');
                localStorage.removeItem('order_token');
                this.router.navigate(['/invoice']);
            }
        });
    }
    payUsingPaypal() {
        this._auth.payWithPaypal(this.patchFrmPaypalAndBalance()).subscribe(res => {
            this.isProgressLoading = false;
            if (!res.status) {
                this._session.messageSnackbar(res.message, 'OK');
            }
            else {
                window.location.href = res.data.url;
            }
        });
    }
};
__decorate([
    Input()
], CommonPayOrderComponent.prototype, "isCard", void 0);
__decorate([
    Input()
], CommonPayOrderComponent.prototype, "order_id", void 0);
__decorate([
    Input()
], CommonPayOrderComponent.prototype, "order_number", void 0);
__decorate([
    Input()
], CommonPayOrderComponent.prototype, "card_details", void 0);
__decorate([
    Input()
], CommonPayOrderComponent.prototype, "agreement", void 0);
__decorate([
    Input()
], CommonPayOrderComponent.prototype, "tabIndex", void 0);
CommonPayOrderComponent = __decorate([
    Component({
        selector: 'app-common-pay-order',
        templateUrl: './common-pay-order.component.html',
        providers: [ApiServices, loggedin_session],
        styleUrls: ['./common-pay-order.component.css']
    })
], CommonPayOrderComponent);
export { CommonPayOrderComponent };
//# sourceMappingURL=common-pay-order.component.js.map