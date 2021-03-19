import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { loggedin_session } from 'src/app/data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let CardComponent = class CardComponent {
    constructor(router, route, _auth, _session) {
        this.router = router;
        this.route = route;
        this._auth = _auth;
        this._session = _session;
        this.isProgressLoading = false;
        this.isBillingAddressVisible = false;
        this.isSaveCardChecked = true;
        this.frmCard = new FormGroup({
            card_firstname: new FormControl(),
            card_lastname: new FormControl(),
            cardnumber: new FormControl(),
            expiry: new FormControl(),
            country: new FormControl(),
            streetaddress: new FormControl(),
            state: new FormControl(),
            zipcode: new FormControl(),
            city: new FormControl(),
            cvv: new FormControl(),
            user_token: new FormControl(localStorage.getItem('user_token')),
        });
        this.frmUser = new FormGroup({
            user_token: new FormControl(localStorage.getItem('user_token')),
        });
        this.expMonth = 12;
        this.expYear = 2021;
    }
    ngOnInit() {
        this.getCardDetails();
    }
    backToPayout(id) {
        this.router.navigate(['/stripe-checkout', id]);
    }
    monitorCvv() {
        let input = this.frmCard.value.cvv;
        this.isBillingAddressVisible = (input.length > 0);
    }
    getCardDetails() {
        this.isProgressLoading = true;
        this._auth.getCardDetails(this.frmUser.value).subscribe(res => {
            console.log(res);
            this.isProgressLoading = false;
            if (res.status) {
                let decoded_token = jwt_decode(res.data.card_token);
                this.expMonth = decoded_token[0].expMonth,
                    this.expYear = decoded_token[0].expYear,
                    this.frmCard.patchValue({
                        card_firstname: decoded_token[0].cFName,
                        card_lastname: decoded_token[0].cLName,
                        cardnumber: decoded_token[0].cNo,
                        expiry: decoded_token[0].expMonth + '/' + decoded_token[0].expYear,
                        country: decoded_token[0].country,
                        streetaddress: decoded_token[0].address,
                        state: decoded_token[0].state,
                        zipcode: decoded_token[0].zip,
                        city: decoded_token[0].city,
                    });
            }
            else {
                this._session.messageSnackbar(res.message, 'OK');
            }
        });
        this._auth.getCountryCode().subscribe(res => {
            this.country_codes = res;
        });
    }
    saveCardDetails() {
        this.isProgressLoading = true;
        this._auth.saveCardDetails(this.frmCard.value).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                this.router.navigate(['/stripe-checkout', this.route.snapshot.paramMap.get('id')]);
            }
            else {
                this._session.messageSnackbar(res.message, 'OK');
            }
        });
    }
    deleteCardDetails() {
        this.isProgressLoading = true;
        this._auth.deleteCardDetails(this.frmCard.value).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                this.frmCard.reset();
                this.frmCard.patchValue({
                    user_token: localStorage.getItem('user_token')
                });
            }
            else {
                this._session.messageSnackbar(res.message, 'OK');
            }
        });
    }
    toggleCardUpdate() {
        if (this.isSaveCardChecked) {
            // this.saveCardDetails();
        }
        else {
            this.deleteCardDetails();
        }
    }
    patchMonth(e) {
        this.isMonthText = (e.length >= 4) ? true : false;
        this.frmCard.patchValue({
            expiry: e + '/' + this.expYear
        });
    }
    patchYear(e) {
        this.isYearText = (e.length >= 4) ? true : false;
        this.frmCard.patchValue({
            expiry: this.expMonth + '/' + e
        });
    }
};
CardComponent = __decorate([
    Component({
        selector: 'app-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.css'],
        providers: [ApiServices, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map