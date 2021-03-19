import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { new_order_form_default } from 'src/app/data/data';
import { loggedin_session } from '../data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let PricingComponent = class PricingComponent {
    constructor(_auth, http, _data, titleService, metaTagService, _session) {
        this._auth = _auth;
        this.http = http;
        this._data = _data;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this._session = _session;
        this.order_token = new FormGroup({
            token: new FormControl(this._auth.getOrderToken())
        });
        this.pricingForm = this._data.setOrders;
        this.sevenPage = [1, 2, 3, 4, 5, 6, 7];
        this.isPowerPointEnabled = false;
        this.isProgressLoading = false;
    }
    setPowerpoint(val) {
        this.isPowerPointEnabled = (val == 2) ? true : false;
    }
    patchDeadline(list) {
        this.pricingForm.patchValue({
            deadline: list.deadline,
            duration: list.duration
        });
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
    setOrders(order_form) {
        localStorage.removeItem('set_order_token');
        this.price = 'Calculating...';
        this._auth.getOrderOptions(order_form).subscribe(res => {
            localStorage.setItem('set_order_token', res.data.order_token);
            this.order_token.patchValue({ token: res.data.order_token });
            var decoded_output = jwt_decode(res.data.order_token);
            this.word_count = decoded_output.word_count;
            this.deadlineLable = decoded_output.deadlineLable;
            this.price = decoded_output.price_without_discount;
            this.deadline_value = this.getDeadlineActive(decoded_output.deadline, decoded_output.duration);
        });
    }
    displayOrderDetails() {
        this.isProgressLoading = true;
        this._auth.getDeadlines().subscribe(val => {
            this.allDeadlines = val.data;
            this.isProgressLoading = false;
        });
    }
    ngOnInit() {
        this.titleService.setTitle("Prices - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "Find out relevant prices for writing and editing on Cheapest Essay. Our pay scale depends on service’s type, writer’s level, deadline and pages you need." });
        this.metaTagService.updateTag({ name: 'keywords', content: "research paper writing service, dissertation writing, resume writing services, professional resume writers, professional proofreading, academic proofreading services, best article writing service, article rewriting service" });
        this.displayOrderDetails();
        this.isUserActive = (this._session.isTokenExisting('user_token')) ? false : true;
        this.pricingForm.patchValue({ user_token: (this.isUserActive) ? localStorage.getItem('user_token') : '' });
        if (this._session.isTokenExisting('set_order_token')) {
            this.setOrders(this.pricingForm.value);
        }
        else {
            let decoded_token = jwt_decode(localStorage.getItem('set_order_token'));
            this.patchPricingForm(decoded_token);
            this.setOrders(this.pricingForm.value);
        }
        this.pricingForm.valueChanges.subscribe((value) => {
            this.setOrders(value);
        });
    }
    incPage() {
        let pageVal = this.pricingForm.value.page;
        pageVal += 1;
        this.patchPageVal(pageVal);
    }
    decPage() {
        let pageVal = this.pricingForm.value.page;
        pageVal = (this.pricingForm.value.page <= 1) ? 1 : pageVal -= 1;
        this.patchPageVal(pageVal);
    }
    patchPageVal(val) {
        this.pricingForm.patchValue({
            page: val
        });
    }
    patchPricingForm(val) {
        this.pricingForm.patchValue({
            service: val.service,
            academic: val.academic,
            deadline: val.deadline,
            page: val.page
        });
    }
};
PricingComponent = __decorate([
    Component({
        selector: 'app-pricing',
        templateUrl: './pricing.component.html',
        styleUrls: ['./pricing.component.css'],
        providers: [ApiServices, new_order_form_default, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], PricingComponent);
export { PricingComponent };
//# sourceMappingURL=pricing.component.js.map