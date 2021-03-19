import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let RateWriterComponent = class RateWriterComponent {
    constructor(_auth, dialogRef) {
        this._auth = _auth;
        this.dialogRef = dialogRef;
        this.rating = [1, 2, 3, 4, 5];
        this.frmRating = new FormGroup({
            user_token: new FormControl(),
            order_id: new FormControl(),
            remark: new FormControl('', [Validators.required]),
            rate: new FormControl()
        });
        this.isProgressLoading = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.patchFrmRating();
    }
    submitRate() {
        this.isProgressLoading = true;
        this._auth.rateWriter(this.frmRating.value).subscribe(res => {
            this.isProgressLoading = false;
            if (!res.status) {
                this.errorMessage = res.message;
            }
            // setTimeout(() => {
            //   this.closeDialog();
            // }, 500);
        });
    }
    patchFrmRating() {
        this.frmRating.patchValue({
            user_token: localStorage.getItem('user_token'),
            order_id: this.order_id,
            rate: this.rate,
        });
    }
    patchRating(rate) {
        this.frmRating.patchValue({
            rate: rate
        });
    }
    setActiveStars(rate, index) {
        let star = '';
        star = (rate > index) ? 'star' : 'star_outline';
        return star;
    }
    getErrorRemarkOption() {
        if (this.frmRating.controls.remark.hasError('required')) {
            return this.errorMessage;
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
};
__decorate([
    Input()
], RateWriterComponent.prototype, "rate", void 0);
__decorate([
    Input()
], RateWriterComponent.prototype, "order_id", void 0);
RateWriterComponent = __decorate([
    Component({
        selector: 'app-rate-writer',
        templateUrl: './rate-writer.component.html',
        providers: [ApiServices],
        styleUrls: ['./rate-writer.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], RateWriterComponent);
export { RateWriterComponent };
//# sourceMappingURL=rate-writer.component.js.map