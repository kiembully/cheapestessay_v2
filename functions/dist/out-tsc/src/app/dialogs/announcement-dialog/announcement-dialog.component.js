import { __decorate, __param } from "tslib";
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServices } from 'src/app/api.service';
let AnnouncementDialogComponent = class AnnouncementDialogComponent {
    constructor(dialogRef, data, _auth, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._auth = _auth;
        this.router = router;
        this.isProgressLoading = false;
        this.agreement = new FormControl(false);
        this.frmNewUser = new FormGroup({
            email: new FormControl({ value: '', disabled: this.isTokenExisting('user_token') }, [Validators.required, Validators.email]),
            fx: new FormControl('freeQuote')
        });
        this.frmCouponCode = new FormGroup({
            order_token: new FormControl(''),
            coupon_code: new FormControl(''),
            user_token: new FormControl('')
        });
        this.frmError = new FormGroup({
            hasError: new FormControl(false),
            text_error: new FormControl('')
        });
    }
    ngOnInit() {
        this.frmCouponCode.patchValue({
            order_token: localStorage.getItem('set_order_token'),
            coupon_code: 'SIGNUP15',
            user_token: ''
        });
    }
    submitNewUser() {
        this.isProgressLoading = true;
        this._auth.registerLogin(this.frmNewUser.value).subscribe(res => {
            this.isProgressLoading = false;
            if (res.status) {
                localStorage.setItem('user_token', res.data);
                this.getCouponCode(this.frmCouponCode.value);
                this.frmError.patchValue({ hasError: res.status, text_error: res.message });
            }
            else {
                this.frmError.patchValue({ hasError: res.status, text_error: res.message });
                // this._session.messageSnackbar(res.message, 'OK')
            }
        });
    }
    getCouponCode(form) {
        this._auth.getCouponCode(form).subscribe(res => {
            if (res.status) {
                localStorage.setItem('discount_token', res.data.discount_token);
                this.router.navigate(['order']);
                this.dialogRef.close();
            }
            else {
                if (res.message == "Accesstoken has Expired!") {
                    // this._session.openSnackBar(res.message, 'OK')
                    this.router.navigate(['/']);
                }
                else {
                    localStorage.setItem('discount_token', 'invalid');
                    this.router.navigate(['order']);
                }
                this.dialogRef.close();
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    getErrorMessage() {
        if (this.frmNewUser.controls.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.frmNewUser.controls.email.hasError('email') ? 'Not a valid email' : '';
    }
    isTokenExisting(name) {
        const token = localStorage.getItem(name);
        let status = (token);
        return status;
    }
};
AnnouncementDialogComponent = __decorate([
    Component({
        selector: 'app-announcement-dialog',
        templateUrl: './announcement-dialog.component.html',
        styleUrls: ['./announcement-dialog.component.css'],
        providers: [ApiServices],
        encapsulation: ViewEncapsulation.None,
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], AnnouncementDialogComponent);
export { AnnouncementDialogComponent };
//# sourceMappingURL=announcement-dialog.component.js.map