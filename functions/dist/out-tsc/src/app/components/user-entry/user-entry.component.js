import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
import { user_functions } from '../../data/user-data';
let UserEntryComponent = class UserEntryComponent {
    constructor(_auth, router, dialogRef, _cdr, _userFx) {
        this._auth = _auth;
        this.router = router;
        this.dialogRef = dialogRef;
        this._cdr = _cdr;
        this._userFx = _userFx;
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('')
        });
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl(''),
            firstname: new FormControl('User Firstname'),
            lastname: new FormControl('User Lastname'),
            mobile: new FormControl(''),
            mobile_prefix: new FormControl("1")
        });
        this.forgotForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
        });
        this.selectedFlag = 'url(https://restcountries.eu/data/usa.svg)';
        this.formHasError = false;
        this.errorMessage = '';
        this.signupHasError = false;
        this.suErrMessage = '';
        this.forgotHasError = false;
        this.fpErrMessage = '';
        // progress bar status 
        this.isProgressLoading = false;
    }
    getCountryCode() {
        this.isProgressLoading = true;
        this._auth.getCountryCode().subscribe(res => {
            this.country_code = res;
            this.isProgressLoading = false;
        });
    }
    loginUser() {
        this.isProgressLoading = true;
        this._auth.getLogin(this.loginForm.value).subscribe(res => {
            this.isProgressLoading = false;
            this.errorMessage = res.message;
            this.formHasError = (res.status == false) ? true : false;
            if (res.status == true) {
                localStorage.removeItem('discount_token');
                localStorage.setItem('user_token', res.data.user_token);
                this.dialogRef.close();
                this.setUrlDestination();
            }
        }, err => {
            console.log(err);
            this.isProgressLoading = false;
        });
    }
    registerUser() {
        this.isProgressLoading = true;
        this._auth.registerLogin(this.registerForm.value).subscribe(res => {
            this.suErrMessage = res.message;
            this.signupHasError = (res.status == false) ? true : false;
            if (res.status == true) {
                this._auth.getLogin(this.registerForm.value).subscribe(resp => {
                    localStorage.setItem('user_token', resp.data.user_token);
                    this.dialogRef.close();
                    this.setUrlDestination();
                });
            }
            this.isProgressLoading = false;
        }, err => {
            console.log(err);
            this.isProgressLoading = false;
        });
    }
    forgotPassowrd() {
        this.isProgressLoading = true;
        this._auth.getNewPassword(this.forgotForm.value).subscribe(res => {
            this.isProgressLoading = false;
            this.fpErrMessage = res.message;
            this.forgotHasError = (res.status == false) ? true : false;
            if (res.status) {
                let index = this.userEntryTabs;
                setTimeout(function () {
                    index.selectedIndex = 0;
                }, 3000);
            }
        });
    }
    ngOnInit() {
        this.getCountryCode();
    }
    ngAfterViewInit() {
        this.tabIndex = this.userEntryTabs.selectedIndex;
        this._cdr.detectChanges();
    }
    selectActiveFlag(code) {
        this.selectedFlag = 'url(https://restcountries.eu/data/' + code.toLowerCase() + '.svg)';
    }
    openForgotPassword() {
        this.userEntryTabs.selectedIndex = 2;
    }
    setUrlDestination() {
        let path = this._userFx.getCurrentPath();
        let isInWritersProfile = path.includes('writers-profile');
        if (path == 'top-writers' || isInWritersProfile) {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([path]);
            });
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['order']);
            });
        }
    }
};
__decorate([
    ViewChild('userEntryTabs')
], UserEntryComponent.prototype, "userEntryTabs", void 0);
UserEntryComponent = __decorate([
    Component({
        selector: 'app-user-entry',
        templateUrl: './user-entry.component.html',
        styleUrls: ['./user-entry.component.css'],
        providers: [ApiServices, user_functions],
        encapsulation: ViewEncapsulation.None,
    })
], UserEntryComponent);
export { UserEntryComponent };
//# sourceMappingURL=user-entry.component.js.map