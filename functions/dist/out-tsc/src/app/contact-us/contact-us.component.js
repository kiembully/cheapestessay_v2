import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServices } from 'src/app/api.service';
let ContactUsComponent = class ContactUsComponent {
    constructor(_auth, _snackBar, titleService, metaTagService) {
        this._auth = _auth;
        this._snackBar = _snackBar;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.frmContact = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', [Validators.required, Validators.minLength(1)]),
        });
    }
    submitContact() {
        this._auth.getContactDetails(this.frmContact.value).subscribe(res => {
            if (res.status == true) {
                this._snackBar.open(res.message, 'OK');
                this.frmContact.reset();
                Object.keys(this.frmContact.controls).forEach(key => {
                    this.frmContact.get(key).setErrors(null);
                });
            }
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    ngOnInit() {
        this.titleService.setTitle("24/7 Writing Services Available | Contact Us | Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "Our writing services are available 24/7. You can contact us by social media, mobile and email. Visit us now! We will be happy to help you." });
        this.metaTagService.updateTag({ name: 'keywords', content: "Contact us, Contact CheapestEssay" });
    }
    getErrorMessage() {
        if (this.frmContact.controls.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.frmContact.controls.email.hasError('email') ? 'Not a valid email' : '';
    }
    getErrorMessageName() {
        if (this.frmContact.controls.name.hasError('required')) {
            return 'You must enter a value';
        }
    }
    getErrorMessageOption() {
        if (this.frmContact.controls.message.hasError('required')) {
            return 'You must enter a value';
        }
    }
    openLink(url) {
        window.location.href = url;
    }
};
ContactUsComponent = __decorate([
    Component({
        selector: 'app-contact-us',
        templateUrl: './contact-us.component.html',
        styleUrls: ['./contact-us.component.css'],
        providers: [ApiServices],
        encapsulation: ViewEncapsulation.None,
    })
], ContactUsComponent);
export { ContactUsComponent };
//# sourceMappingURL=contact-us.component.js.map