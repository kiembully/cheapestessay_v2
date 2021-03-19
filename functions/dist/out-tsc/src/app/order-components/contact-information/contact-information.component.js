import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { loggedin_session } from '../../data/ui-services';
import { FormControl, Validators, FormGroup } from '@angular/forms';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let ContactInformationComponent = class ContactInformationComponent {
    constructor(_auth, _session) {
        this._auth = _auth;
        this._session = _session;
        this.frmContactInfo = new FormGroup({
            user_email: new FormControl('', [Validators.required, Validators.email]),
            first_name: new FormControl('', [Validators.required]),
            last_name: new FormControl('', [Validators.required]),
            country: new FormControl('United States of America'),
            telephone_prefix: new FormControl("1"),
            customer_telephone: new FormControl('', [Validators.required, Validators.minLength(10)]),
            iso_code: new FormControl('us'),
        });
        this.selectedFlag = 'url(https://restcountries.eu/data/usa.svg)';
    }
    ngOnInit() {
        this.getCountryCode();
        this.getUserInfo();
    }
    getCountryCode() {
        this._auth.getCountryCode().subscribe(res => {
            this.country_code = res;
        });
    }
    getUserInfo() {
        if (!this._session.isTokenExisting('user_token')) {
            let decoded_token = jwt_decode(localStorage.getItem('user_token'));
            this.patchFrmContactInfo(decoded_token);
        }
    }
    patchFrmContactInfo(val) {
        this.frmContactInfo.patchValue({
            user_email: val.user_details.user_email,
            first_name: val.user_details.first_name,
            last_name: val.user_details.last_name,
            country: val.user_details.country,
            telephone_prefix: val.user_details.telephone_prefix,
            customer_telephone: val.user_details.customer_telephone
        });
    }
    selectActiveFlag(code) {
        this.selectedFlag = 'url(https://restcountries.eu/data/' + code.toLowerCase() + '.svg)';
    }
    // validation
    firstNameErrorMsg() {
        if (this.frmContactInfo.controls.first_name.hasError('required')) {
            return 'This value should not be blank';
        }
    }
    lastNameErrorMsg() {
        if (this.frmContactInfo.controls.last_name.hasError('required')) {
            return 'This value should not be blank';
        }
    }
    emailErrorMsg() {
        if (this.frmContactInfo.controls.user_email.hasError('required')) {
            return 'This value should not be blank';
        }
        return this.frmContactInfo.controls.user_email.hasError('email') ? 'Not a valid email' : '';
    }
    telErrorMsg() {
        if (this.frmContactInfo.controls.customer_telephone.hasError('required')) {
            return 'You must enter a value';
        }
        return this.frmContactInfo.controls.customer_telephone.errors.minlength.actualLength < 10 ? 'Not a valid Tel/mobile' : '';
    }
};
ContactInformationComponent = __decorate([
    Component({
        selector: 'app-contact-information',
        templateUrl: './contact-information.component.html',
        styleUrls: ['./contact-information.component.css'],
        providers: [ApiServices, loggedin_session],
        encapsulation: ViewEncapsulation.None,
    })
], ContactInformationComponent);
export { ContactInformationComponent };
//# sourceMappingURL=contact-information.component.js.map