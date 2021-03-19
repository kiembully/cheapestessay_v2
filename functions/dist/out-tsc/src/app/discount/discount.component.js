import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonDialogComponent } from '../dialogs/common-dialog/common-dialog.component';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
let DiscountComponent = class DiscountComponent {
    constructor(_snackBar, dialog, _auth, titleService, metaTagService) {
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this._auth = _auth;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.tokenForm = new FormGroup({
            user_token: new FormControl(this._auth.getToken())
        });
        this.couponCode = 'fetching data...';
        this.referralLink = 'fetching data...';
        this.isCopyDisabled = false;
    }
    displayDiscount() {
        this.isCopyDisabled = true;
        this._auth.getDiscount(this.tokenForm.value).subscribe(res => {
            if (res.status) {
                this.couponCode = res.data.code;
                this.referralLink = res.data.link;
                this.isCopyDisabled = false;
            }
            else {
                this.couponCode = 'Not yet availble';
                this.referralLink = 'Not yet availble';
                this.isCopyDisabled = true;
            }
        });
    }
    ngOnInit() {
        this.titleService.setTitle("Save Money through Discounts and Promo Codes - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "n/a" });
        this.metaTagService.updateTag({ name: 'keywords', content: "n/a" });
        this.displayDiscount();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(CommonDialogComponent, {
            height: '700px',
            width: '1000px',
            backdropClass: 'common-dialog',
            panelClass: 'panel-dialog',
            data: {
                // displays discount how it works component
                content_id: 5
            }
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    }
};
DiscountComponent = __decorate([
    Component({
        selector: 'app-discount',
        templateUrl: './discount.component.html',
        styleUrls: ['./discount.component.css'],
        providers: [ApiServices],
        encapsulation: ViewEncapsulation.None,
    })
], DiscountComponent);
export { DiscountComponent };
//# sourceMappingURL=discount.component.js.map