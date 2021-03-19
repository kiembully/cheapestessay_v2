import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { profile_form_default } from 'src/app/data/data';
let UpdateProfileComponent = class UpdateProfileComponent {
    constructor(_auth, dialogRef, router, _data) {
        this._auth = _auth;
        this.dialogRef = dialogRef;
        this.router = router;
        this._data = _data;
        this.nameForm = this._data.nameForm;
        this.passwordForm = this._data.passwordForm;
        this.emailForm = this._data.emailForm;
        this.mobileForm = this._data.mobileForm;
        this.whatsAppForm = this._data.whatsAppForm;
        this.addressForm = this._data.addressForm;
        this.nameHasError = false;
        this.errorMessageName = '';
        this.isProgressLoading = false;
        this.pswdHasError = false;
        this.errorMessagePswd = '';
        this.emailHasError = false;
        this.errorMessageEmail = '';
        this.mobHasError = false;
        this.errorMessageMob = '';
        this.waHasError = false;
        this.errorMessageWa = '';
        this.addressHasError = false;
        this.errorMessageAddress = '';
        this.selectedFlag = 'url(https://restcountries.eu/data/usa.svg)';
        this.selectedCode = 'url(https://restcountries.eu/data/usa.svg)';
    }
    rewriteToken(new_token) {
        localStorage.removeItem('user_token');
        localStorage.setItem('user_token', new_token);
    }
    closeDialog() {
        setTimeout(() => {
            this.dialogRef.close();
        }, 1000);
    }
    updateFullName() {
        this.isProgressLoading = true;
        this._auth.getFullName(this.nameForm.value).subscribe(res => {
            this.errorMessageName = res.message;
            this.nameHasError = (!res.status) ? true : false;
            if (res.status == true) {
                this.rewriteToken(res.data.user_token);
                this.closeDialog();
            }
            this.isProgressLoading = false;
        });
    }
    updatePassword() {
        this.isProgressLoading = true;
        this._auth.getPassword(this.passwordForm.value).subscribe(res => {
            this.errorMessagePswd = res.message;
            this.pswdHasError = (!res.status) ? true : false;
            if (res.status == true) {
                this.closeDialog();
            }
            this.isProgressLoading = false;
        });
    }
    updateEmail() {
        this.isProgressLoading = true;
        this._auth.getEmail(this.emailForm.value).subscribe(res => {
            this.errorMessageEmail = res.message;
            this.emailHasError = (!res.status) ? true : false;
            if (res.status == true) {
                this.rewriteToken(res.data.user_token);
                this.closeDialog();
            }
            this.isProgressLoading = false;
        });
    }
    updateMobile() {
        this.isProgressLoading = true;
        this._auth.getMobile(this.mobileForm.value).subscribe(res => {
            this.errorMessageMob = res.message;
            this.mobHasError = (!res.status) ? true : false;
            if (res.status == true) {
                this.rewriteToken(res.data.user_token);
                this.closeDialog();
            }
            this.isProgressLoading = false;
        });
    }
    updateWhatsApp() {
        this.isProgressLoading = true;
        this._auth.getWhatsapp(this.whatsAppForm.value).subscribe(res => {
            console.log(res);
            this.errorMessageWa = res.message;
            this.waHasError = (!res.status) ? true : false;
            if (res.status == true) {
                this.rewriteToken(res.data.user_token);
                this.closeDialog();
            }
            this.isProgressLoading = false;
            // to do 
        });
    }
    updateAddress() {
        this.isProgressLoading = true;
        this._auth.getAddress(this.addressForm.value).subscribe(res => {
            this.errorMessageAddress = res.message;
            this.addressHasError = (!res.status) ? true : false;
            if (res.status == true) {
                this.rewriteToken(res.data.user_token);
                this.closeDialog();
            }
            this.isProgressLoading = false;
        });
    }
    ngOnInit() {
        this.patchNameForm();
        this.patchEmail();
        this.patchMobile();
        this.patchWhatsApp();
        this.patchAddress();
        this.patchPasswordForm();
        this.displayCountryCode();
    }
    patchNameForm() {
        this.nameForm.patchValue({
            first_name: this.profile_data.user_details.first_name,
            last_name: this.profile_data.user_details.last_name,
            user_token: this._auth.getToken()
        });
    }
    patchEmail() {
        this.emailForm.patchValue({
            email: this.profile_data.user_details.user_email,
            user_token: this._auth.getToken()
        });
    }
    patchMobile() {
        this.mobileForm.patchValue({
            telephone: this.profile_data.user_details.customer_telephone,
            prefix: this.profile_data.user_details.telephone_prefix,
            user_token: this._auth.getToken()
        });
    }
    patchWhatsApp() {
        this.whatsAppForm.patchValue({
            whatsapp_num: this.profile_data.user_details.whatsapp_number,
            user_token: this._auth.getToken()
        });
    }
    patchPrefix(e) {
        this.mobileForm.patchValue({
            prefix: '+' + e
        });
    }
    patchAddress() {
        this.addressForm.patchValue({
            street: this.profile_data.user_details.address,
            city: this.profile_data.user_details.city,
            state: this.profile_data.user_details.state,
            zipcode: this.profile_data.user_details.post_code,
            countrycode: this.profile_data.user_details.iso_code,
            country: this.profile_data.user_details.country,
            user_token: this._auth.getToken(),
        });
    }
    displayCountryCode() {
        this.isProgressLoading = true;
        this._auth.getCountryCode().subscribe(res => {
            this.country_code = res;
            this.isProgressLoading = false;
        });
    }
    patchPasswordForm() {
        this.passwordForm.patchValue({
            user_token: localStorage.getItem('user_token')
        });
    }
    resetUserToken(new_token) {
        localStorage.removeItem('user_token');
        localStorage.setItem('user_token', new_token);
    }
    selectActiveFlag(code) {
        this.selectedFlag = 'url(https://restcountries.eu/data/' + code.toLowerCase() + '.svg)';
    }
    selectActiveCode(code) {
        this.selectedCode = 'url(https://restcountries.eu/data/' + code.toLowerCase() + '.svg)';
    }
};
__decorate([
    Input()
], UpdateProfileComponent.prototype, "form_id", void 0);
__decorate([
    Input()
], UpdateProfileComponent.prototype, "profile_data", void 0);
UpdateProfileComponent = __decorate([
    Component({
        selector: 'app-update-profile',
        templateUrl: './update-profile.component.html',
        styleUrls: ['./update-profile.component.css'],
        providers: [ApiServices, profile_form_default],
        encapsulation: ViewEncapsulation.None,
    })
], UpdateProfileComponent);
export { UpdateProfileComponent };
//# sourceMappingURL=update-profile.component.js.map