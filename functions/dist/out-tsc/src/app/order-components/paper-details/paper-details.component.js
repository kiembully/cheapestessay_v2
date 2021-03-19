import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { new_order_form_default } from '../../data/data';
import { loggedin_session } from '../../data/ui-services';
import { FormGroup, FormControl } from '@angular/forms';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let PaperDetailsComponent = class PaperDetailsComponent {
    constructor(_auth, _defaultOrder, _session) {
        this._auth = _auth;
        this._defaultOrder = _defaultOrder;
        this._session = _session;
        this.user_token_form = new FormGroup({
            user_token: new FormControl(this._auth.getToken()),
        });
        this.order_token = new FormGroup({
            token: new FormControl(this._auth.getOrderToken())
        });
        this.frmPapers = this._defaultOrder.setOrders;
    }
    ngOnInit() {
        this.paper_list = this.paper_data[1].data;
        this.other_paper_list = this.paper_data[2].data;
        this.subject_list = this.paper_data[4].data;
        this.other_subject_list = this.paper_data[5].data;
        this.deadline_list = this.paper_data[6].data;
        this.format_style_list = this.paper_data[7].data;
        this.top_writer_list = this.paper_data[9].data;
        this.other_writer_list = this.paper_data[10].data;
        this.displayOldWriters();
        if (this._session.isTokenExisting('set_order_token')) {
            this.setOrder(this.frmPapers.value);
        }
        else {
            let decoded_order_token = jwt_decode(localStorage.getItem('set_order_token'));
            this.patchFrmPapers(decoded_order_token);
            // this.setOrder(decoded_order_token);
        }
        this.frmPapers.valueChanges.subscribe((value) => {
            console.log(value);
            this.setOrder(value);
        });
    }
    displayOldWriters() {
        if (!this._session.isTokenExisting('user_token')) {
            this._auth.getOldWriters(this.user_token_form.value).subscribe(res => {
                this.recent_writer_list = res.data;
            });
        }
    }
    setOrder(form) {
        this._auth.getOrderOptions(form).subscribe(val => {
            console.log(val);
            this.decoded_token = jwt_decode(val.data.order_token);
            this.order_token.patchValue({ token: val.data.order_token });
            this.total_price = this.decoded_token.totalPrice;
            localStorage.removeItem('set_order_token');
            localStorage.setItem('set_order_token', val.data.order_token);
        });
    }
    // patching values
    patchFrmPapers(res) {
        this.frmPapers.patchValue({
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
        });
    }
    patchDeadline(e) {
        this.frmPapers.patchValue({
            deadline: this.getDeadlineSliderValue(e),
        });
    }
    patchPageTotal(e) {
        this.frmPapers.patchValue({
            page: e,
        });
    }
    patchSourceTotal(e) {
        this.frmPapers.patchValue({
            source: e
        });
    }
    // validations
    topicErrorMsg() {
        if (this.frmPapers.controls.topic.hasError('required')) {
            return 'This value should not be blank';
        }
    }
    otherFormatErrorMsg() {
        if (this.frmPapers.controls.other_format.hasError('required')) {
            return 'This value should not be blank';
        }
    }
    detailsErrorMsg() {
        if (this.frmPapers.controls.add_detail.hasError('required')) {
            return 'This value should not be blank';
        }
    }
    otherPaperErrorMsg() {
        if (this.frmPapers.controls.other_paper.hasError('required')) {
            return 'This value should not be blank';
        }
    }
    // interpreting of data 
    getDeadlineValue(val) {
        let new_val;
        switch (val) {
            case 9: {
                new_val = 0;
                return new_val;
            }
            case 8: {
                new_val = 1;
                return new_val;
            }
            case 7: {
                new_val = 2;
                return new_val;
            }
            case 6: {
                new_val = 3;
                return new_val;
            }
            case 95: {
                new_val = 4;
                return new_val;
            }
            case 92: {
                new_val = 5;
                return new_val;
            }
            case 4: {
                new_val = 6;
                return new_val;
            }
            case 89: {
                new_val = 7;
                return new_val;
            }
            case 3: {
                new_val = 8;
                return new_val;
            }
            case 2: {
                new_val = 9;
                return new_val;
            }
            case 86: {
                new_val = 10;
                return new_val;
            }
            case 83: {
                new_val = 11;
                return new_val;
            }
        }
    }
    getDeadlineSliderValue(val) {
        let new_val;
        switch (val) {
            case 0: {
                new_val = 9;
                return new_val;
            }
            case 1: {
                new_val = 8;
                return new_val;
            }
            case 2: {
                new_val = 7;
                return new_val;
            }
            case 3: {
                new_val = 6;
                return new_val;
            }
            case 4: {
                new_val = 95;
                return new_val;
            }
            case 5: {
                new_val = 92;
                return new_val;
            }
            case 6: {
                new_val = 4;
                return new_val;
            }
            case 7: {
                new_val = 89;
                return new_val;
            }
            case 8: {
                new_val = 3;
                return new_val;
            }
            case 9: {
                new_val = 2;
                return new_val;
            }
            case 10: {
                new_val = 86;
                return new_val;
            }
            case 11: {
                new_val = 83;
                return new_val;
            }
        }
    }
};
__decorate([
    Input()
], PaperDetailsComponent.prototype, "paper_data", void 0);
PaperDetailsComponent = __decorate([
    Component({
        selector: 'app-paper-details',
        templateUrl: './paper-details.component.html',
        styleUrls: ['./paper-details.component.css'],
        providers: [ApiServices, new_order_form_default, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], PaperDetailsComponent);
export { PaperDetailsComponent };
//# sourceMappingURL=paper-details.component.js.map