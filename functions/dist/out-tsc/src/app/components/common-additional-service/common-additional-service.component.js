import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let CommonAdditionalServiceComponent = class CommonAdditionalServiceComponent {
    constructor() {
        this.addnl_service_list = [
            "FREE APA/MLA/Chicago formatting",
            "FREE Turnitin Report",
            "FREE Sources and Reference",
            "FREE Revisions",
            "FREE Proofreading",
            "FREE 24/7 Customer Support",
            "and if we missed the deadline, you will get a 100% refund."
        ];
    }
    ngOnInit() {
    }
};
CommonAdditionalServiceComponent = __decorate([
    Component({
        selector: 'app-common-additional-service',
        templateUrl: './common-additional-service.component.html',
        styleUrls: ['./common-additional-service.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], CommonAdditionalServiceComponent);
export { CommonAdditionalServiceComponent };
//# sourceMappingURL=common-additional-service.component.js.map