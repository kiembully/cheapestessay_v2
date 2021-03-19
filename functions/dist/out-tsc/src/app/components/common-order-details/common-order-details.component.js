import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let CommonOrderDetailsComponent = class CommonOrderDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
    checkValue(arr, val) {
        return arr.includes(val);
    }
};
__decorate([
    Input()
], CommonOrderDetailsComponent.prototype, "order_details", void 0);
CommonOrderDetailsComponent = __decorate([
    Component({
        selector: 'app-common-order-details',
        templateUrl: './common-order-details.component.html',
        styleUrls: ['./common-order-details.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], CommonOrderDetailsComponent);
export { CommonOrderDetailsComponent };
//# sourceMappingURL=common-order-details.component.js.map