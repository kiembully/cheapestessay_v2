import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CheckoutComponent = class CheckoutComponent {
    constructor(route, router, titleService, metaTagService) {
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Add Card - Stripe | CheapestEssay");
        this.metaTagService.updateTag({ name: 'description', content: "None" });
        this.metaTagService.updateTag({ name: 'keywords', content: "None" });
    }
};
CheckoutComponent = __decorate([
    Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.css']
    })
], CheckoutComponent);
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map