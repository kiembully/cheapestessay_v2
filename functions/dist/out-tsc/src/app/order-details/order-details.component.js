import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default } from 'src/app/data/data';
import { DialogTriggers } from 'src/app/data/ui-services';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let OrderDetailsComponent = class OrderDetailsComponent {
    constructor(route, _auth, _order, router, _dialogTrigger) {
        this.route = route;
        this._auth = _auth;
        this._order = _order;
        this.router = router;
        this._dialogTrigger = _dialogTrigger;
        this.isProgressLoading = false;
        this.newOrderForm = this._order.setOrders;
        this.order_details = [];
        this.frmOrder = new FormGroup({
            user_token: new FormControl(''),
            order_id: new FormControl(),
        });
        this.couponForm = new FormGroup({
            user_token: new FormControl(''),
            order_token: new FormControl(''),
            coupon_code: new FormControl('')
        });
    }
    patchFrmOrder(id) {
        this.frmOrder.patchValue({
            user_token: localStorage.getItem('user_token'),
            order_id: id
        });
    }
    patchFrmCoupon(code) {
        if (code != "0") {
            this.couponForm.patchValue({
                user_token: localStorage.getItem('user_token'),
                order_token: localStorage.getItem('order_token'),
                coupon_code: code,
            });
            this.setCoupon();
        }
        else {
            localStorage.removeItem('discount_token');
        }
    }
    ngOnInit() {
        localStorage.removeItem('is_editing');
        localStorage.removeItem('uploaded_token');
        this.initializeOrderDetails();
    }
    initializeOrderDetails() {
        let id = this.route.snapshot.paramMap.get('id');
        this.patchFrmOrder(id);
        this.displayOrderDetails();
    }
    displayOrderDetails() {
        this.isProgressLoading = true;
        this._auth.displayOrder(this.frmOrder.value).subscribe(res => {
            this.isProgressLoading = false;
            this.order_details = res.data;
            this.order_id = res.data.order_id;
            this.order_status = res.data.status.order_status_flag;
            this.paper_details = res.data.status.paper_stats.description;
            this.couponForm.patchValue({
                coupon_code: res.data.payment.coupon_code,
                user_token: localStorage.getItem('user_token')
            });
            this.preEditOrder();
        });
    }
    preEditOrder() {
        this.isProgressLoading = true;
        this._auth.editMyOrder(this.frmOrder.value).subscribe(res => {
            let decoded_order_token = jwt_decode(res.data.order_token);
            this.setValueOrders(decoded_order_token);
            // this.iniAdditionalExtras(decoded_order_token.additionalextra);
            this.uploaded_token = res.data.uploaded_token;
            this.couponForm.patchValue({
                order_token: res.data.order_token
            });
            this.setCoupon();
        });
    }
    editOrder() {
        localStorage.setItem('order_token', this.couponForm.value.order_token);
        localStorage.setItem('uploaded_token', this.uploaded_token);
        let decoded_order_token = jwt_decode(this.couponForm.value.order_token);
        this.setValueOrders(decoded_order_token);
        if (this.pre_discount_token !== '') {
            localStorage.setItem('discount_token', this.pre_discount_token);
        }
        localStorage.setItem('set_order_token', this.couponForm.value.order_token);
        localStorage.setItem('is_editing', 'true');
        this.router.navigate(['/edit-order', decoded_order_token.order_id]);
    }
    setValueOrders(res) {
        this.newOrderForm.patchValue({
            service: res.service,
            page: res.page,
            set_spacing: res.set_spacing,
            academic: res.academic,
            paper: res.paper,
            other_paper: res.other_paper,
            subject: res.subject,
            other_subject: res.other_subject,
            formated_style: res.formated_style,
            other_format: res.other_format,
            source: res.source,
            discipline: res.discipline,
            topic: res.topic,
            add_detail: res.add_detail,
            timezone: res.timezone,
            deadline: res.deadline,
            duration: res.duration,
            slide: res.slide,
            chart: res.chart,
            preferred_writer: res.preferred_writer,
            writer_id: res.writer_id,
            additionalextra: res.additionalextra,
        });
    }
    setCoupon() {
        this._auth.getCouponCode(this.couponForm.value).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                this.pre_discount_token = res.data.discount_token;
            }
            else {
                this.pre_discount_token = '';
            }
        });
    }
    iniAdditionalExtras(val) {
        let new_val = (val.length > 0) ? val.toString() : '';
        this.isPlagiarismActive = (new_val == '6,7' || new_val == '6' || new_val == '7' || new_val == '') ? false : true;
        this.isAbstractActive = (new_val == '5,7' || new_val == '5' || new_val == '7' || new_val == '') ? false : true;
        this.isEmailActive = (new_val == '5,6' || new_val == '6' || new_val == '5' || new_val == '') ? false : true;
        this.patchExtras(this.isPlagiarismActive, this.isAbstractActive, this.isEmailActive);
    }
    patchExtras(val, val2, val3) {
        let arr = [val, val2, val3];
        let extras = ['5', '6', '7'];
        let value = '';
        for (let index = 0; index < extras.length; index++) {
            if (arr[index]) {
                value += extras[index].toString() + ',';
            }
        }
        this.newOrderForm.patchValue({
            additionalextra: value.slice(0, -1),
        });
    }
};
OrderDetailsComponent = __decorate([
    Component({
        selector: 'app-order-details',
        templateUrl: './order-details.component.html',
        styleUrls: ['./order-details.component.css'],
        providers: [ApiServices, new_order_form_default, DialogTriggers],
        encapsulation: ViewEncapsulation.None,
    })
], OrderDetailsComponent);
export { OrderDetailsComponent };
//# sourceMappingURL=order-details.component.js.map