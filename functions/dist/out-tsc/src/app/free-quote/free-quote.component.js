import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let FreeQuoteComponent = class FreeQuoteComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Essay Writing Prices - Get a Free Quote Now");
        this.metaTagService.updateTag({ name: 'description', content: "Looking for academic writing help? Get a free quote and hire an expert writer at affordable essay writing prices. Visit us or call at +1 (909) 441-1414." });
        this.metaTagService.updateTag({ name: 'keywords', content: "free quote, discounts" });
    }
};
FreeQuoteComponent = __decorate([
    Component({
        selector: 'app-free-quote',
        templateUrl: './free-quote.component.html',
        styleUrls: ['./free-quote.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], FreeQuoteComponent);
export { FreeQuoteComponent };
//# sourceMappingURL=free-quote.component.js.map