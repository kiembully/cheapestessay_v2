import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let CommonDialogComponent = class CommonDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
CommonDialogComponent = __decorate([
    Component({
        selector: 'app-common-dialog',
        templateUrl: './common-dialog.component.html',
        styleUrls: ['./common-dialog.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], CommonDialogComponent);
export { CommonDialogComponent };
//# sourceMappingURL=common-dialog.component.js.map