import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonDialogComponent } from '../dialogs/common-dialog/common-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';
import { profile_form_default } from 'src/app/data/data';
import { ApiServices } from 'src/app/api.service';
// @ts-ignore  
import jwt_decode from 'jwt-decode';
let ProfileComponent = class ProfileComponent {
    constructor(dialog, _data, router, _auth, titleService, metaTagService) {
        this.dialog = dialog;
        this._data = _data;
        this.router = router;
        this._auth = _auth;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.memberStatusForm = new FormGroup({
            levelForm: this._data.levelForm,
            dateStarted: new FormControl(),
        });
        this.nameForm = this._data.nameForm;
        this.emailForm = this._data.emailForm;
        this.addressForm = this._data.addressForm;
        this.isProgressLoading = false;
        this.userId = 'Fetching...';
        this.mobile = '';
        this.whatsapp = '';
        this.user_token = new FormGroup({
            user_token: new FormControl(this._auth.getToken()),
        });
        this.frmUserLevel = this._data.levelForm;
    }
    displayProfile() {
        this.decoded_user_token = jwt_decode(localStorage.getItem('user_token'));
        this.userId = this.decoded_user_token.user_details.customer_no;
        this.patchMemberStatus(this.decoded_user_token);
        this.patchName(this.decoded_user_token);
        this.patchEmail(this.decoded_user_token);
        this.mobile = this.filterUnfilledForm(this.decoded_user_token.user_details.mobile);
        this.whatsapp = this.filterUnfilledForm(this.decoded_user_token.user_details.whatsapp_number);
        this.patchAddress(this.decoded_user_token);
        this.retrievedData = this.decoded_user_token;
    }
    getLevel() {
        this._auth.getLevel(this.user_token.value).subscribe(res => {
            this.frmUserLevel.patchValue({
                lifetime_discount_name: res.data.user_level,
            });
        });
    }
    filterUnfilledForm(text) {
        if (text != null) {
            let state = (text.length > 1) ? text : 'N/A';
            return state;
        }
    }
    ngOnInit() {
        this.titleService.setTitle("User Profile to Order Essay Online - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "n/a" });
        this.metaTagService.updateTag({ name: 'keywords', content: "Order Essay Online" });
        this.displayProfile();
        this.getLevel();
    }
    openUpdateProfile(section_id) {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            width: '600px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays update name component
                content_id: 4,
                profile_detail_id: section_id,
                profile: this.retrievedData
            }
        });
        dialogRef.afterClosed().subscribe(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile']);
            });
        });
    }
    patchMemberStatus(data) {
        this.memberStatusForm.patchValue({
            dateStarted: data.user_details.user_joined_date,
        });
        this.memberStatusForm.value.levelForm = this._data.levelForm.patchValue({
        // lifetime_discount_name: data.user_level.lifetime_discount_name,
        });
    }
    patchName(data) {
        this.nameForm.patchValue({
            first_name: this.filterUnfilledForm(data.user_details.first_name),
            last_name: this.filterUnfilledForm(data.user_details.last_name)
        });
    }
    patchEmail(data) {
        this.emailForm.patchValue({
            email: this.filterUnfilledForm(data.user_details.user_email)
        });
    }
    patchAddress(data) {
        this.addressForm.patchValue({
            street: data.user_details.address,
            city: data.user_details.city,
            state: data.user_details.state,
            zipcode: data.user_details.post_code,
            country: data.user_details.country,
        });
    }
    getClassLevel(val) {
        switch (val) {
            case 'Silver': {
                return 'silver-label';
            }
            case 'Gold': {
                return 'gold-label';
            }
            case 'VIP': {
                return 'vip-label';
            }
            default: {
                return 'blue-label';
            }
        }
    }
    getBadgeColor(val) {
        switch (val) {
            case 'Silver': {
                return '#8392A7';
            }
            case 'Gold': {
                return '#FFD500';
            }
            case 'VIP': {
                return '#D0021B';
            }
            default: {
                return '#578EFD';
            }
        }
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        providers: [profile_form_default, ApiServices],
        styleUrls: ['./profile.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map