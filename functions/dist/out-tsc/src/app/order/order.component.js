import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OrderComponent = class OrderComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Order Essay Online -  Hire our Professional Writers Now!");
        this.metaTagService.updateTag({ name: 'description', content: "Order Online if you are tired of endless article & essay papers. Visit Cheapest Essay and place your order now! For assistance, call at +1 (909) 441-1414." });
        this.metaTagService.updateTag({ name: 'keywords', content: "Order essay online" });
    }
};
OrderComponent = __decorate([
    Component({
        selector: 'app-order',
        templateUrl: './order.component.html',
        styleUrls: ['./order.component.css'],
    })
], OrderComponent);
export { OrderComponent };
//# sourceMappingURL=order.component.js.map