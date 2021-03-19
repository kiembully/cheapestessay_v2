import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
let CommonDialogMessageComponent = class CommonDialogMessageComponent {
    constructor(_auth, router, dialogRef) {
        this._auth = _auth;
        this.router = router;
        this.dialogRef = dialogRef;
        this.frmDeleteOrder = new FormGroup({
            user_token: new FormControl(''),
            order_id: new FormControl()
        });
        this.isProgressLoading = false;
    }
    ngOnInit() {
        this.patchFrmDeleteOrder(this.order_id);
    }
    deleteOrder() {
        this.isProgressLoading = true;
        this._auth.deleteOrder(this.frmDeleteOrder.value).subscribe((res) => {
            if (res.message) {
                localStorage.removeItem('order_token');
                this.isProgressLoading = false;
                this.dialogRef.close();
                this.router.navigate(['/my-orders']);
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/my-orders']);
                });
            }
        });
    }
    patchFrmDeleteOrder(id) {
        this.frmDeleteOrder.patchValue({
            user_token: localStorage.getItem('user_token'),
            order_id: id
        });
    }
};
__decorate([
    Input()
], CommonDialogMessageComponent.prototype, "order_id", void 0);
CommonDialogMessageComponent = __decorate([
    Component({
        selector: 'app-common-dialog-message',
        templateUrl: './common-dialog-message.component.html',
        providers: [ApiServices],
        styleUrls: ['./common-dialog-message.component.css']
    })
], CommonDialogMessageComponent);
export { CommonDialogMessageComponent };
//# sourceMappingURL=common-dialog-message.component.js.map