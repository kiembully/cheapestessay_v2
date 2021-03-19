import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
let CommonOrderDetailsPaperComponent = class CommonOrderDetailsPaperComponent {
    constructor() { }
    ngOnInit() {
        this.orderIsCompleted = (this.order_details.files.writer_files.data != null);
    }
};
__decorate([
    Input()
], CommonOrderDetailsPaperComponent.prototype, "paper_details", void 0);
__decorate([
    Input()
], CommonOrderDetailsPaperComponent.prototype, "order_details", void 0);
CommonOrderDetailsPaperComponent = __decorate([
    Component({
        selector: 'app-common-order-details-paper',
        templateUrl: './common-order-details-paper.component.html',
        styleUrls: ['./common-order-details-paper.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], CommonOrderDetailsPaperComponent);
export { CommonOrderDetailsPaperComponent };
//# sourceMappingURL=common-order-details-paper.component.js.map