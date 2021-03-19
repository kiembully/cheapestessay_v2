import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CommonFaqsDataComponent = class CommonFaqsDataComponent {
    constructor(sanitized) {
        this.sanitized = sanitized;
        this.panelOpenState = false;
        this.faqIndexExpanded = -1;
    }
    ngOnInit() {
    }
    togglePanels(index) {
        this.faqIndexExpanded = (index == this.faqIndexExpanded) ? -1 : index;
    }
};
__decorate([
    Input()
], CommonFaqsDataComponent.prototype, "expanded", void 0);
__decorate([
    Input()
], CommonFaqsDataComponent.prototype, "faq_home_content", void 0);
CommonFaqsDataComponent = __decorate([
    Component({
        selector: 'app-common-faqs-data',
        templateUrl: './common-faqs-data.component.html',
        styleUrls: ['./common-faqs-data.component.css']
    })
], CommonFaqsDataComponent);
export { CommonFaqsDataComponent };
//# sourceMappingURL=common-faqs-data.component.js.map