import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { loggedin_session } from 'src/app/data/ui-services';
import { catchError, retry, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
let InvoiceComponent = class InvoiceComponent {
    constructor(_session, router, route, http) {
        this._session = _session;
        this.router = router;
        this.route = route;
        this.http = http;
        this.isProgressLoading = false;
        this.isPaymentSuccess = true;
        this.invoice = [];
        this.frmInvoice = new FormGroup({
            token: new FormControl(),
            PayerID: new FormControl()
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.frmInvoice.patchValue({
                token: params['token'],
                PayerID: params['PayerID']
            });
        });
        if (this.frmInvoice.value.token == undefined && this.frmInvoice.value.PayerID == undefined) {
            this.invoice = JSON.parse(localStorage.getItem('invoice'));
        }
        else {
            this.setOutput();
        }
        // this.avoidInvoice();
    }
    ngOnDestroy() {
        localStorage.removeItem('invoice');
    }
    avoidInvoice() {
        if (this._session.isTokenExisting('invoice')) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    }
    translateValue(val) {
        return (val == 0) ? 'No' : val;
    }
    setOutput() {
        this.isProgressLoading = true;
        this._baseUrl = 'https://web.cheapestessay.com/invoice?token=' + this.frmInvoice.value.token + '&PayerID=' + this.frmInvoice.value.PayerID;
        return this.http.post(this._baseUrl, this.frmInvoice.value).pipe(retry(3), catchError(() => {
            return EMPTY;
        }), shareReplay()).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                localStorage.setItem('invoice', JSON.stringify(res.data));
                this.invoice = JSON.parse(localStorage.getItem('invoice'));
            }
            else {
                this.isPaymentSuccess = false;
            }
        });
    }
    convertTimestampToDate(timestamp) {
        var s = new Date(parseInt(timestamp)).toLocaleDateString("en-US");
        return s;
    }
    getCurrentDate() {
        let today = new Date();
        let date = today.getHours() + ":" + today.getMinutes() + ", " + today.toDateString();
        return date;
    }
};
InvoiceComponent = __decorate([
    Component({
        selector: 'app-invoice',
        templateUrl: './invoice.component.html',
        providers: [loggedin_session],
        styleUrls: ['./invoice.component.css']
    })
], InvoiceComponent);
export { InvoiceComponent };
//# sourceMappingURL=invoice.component.js.map