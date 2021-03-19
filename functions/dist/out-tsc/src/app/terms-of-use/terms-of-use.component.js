import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TermsOfUseComponent = class TermsOfUseComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Terms of Use - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "Please read Terms of Use carefully before ordering an essay on our site to protect yourself. You can check order revisions and refund policies all in one place." });
        this.metaTagService.updateTag({ name: 'keywords', content: "termofuse" });
    }
};
TermsOfUseComponent = __decorate([
    Component({
        selector: 'app-terms-of-use',
        templateUrl: './terms-of-use.component.html',
        styleUrls: ['./terms-of-use.component.css']
    })
], TermsOfUseComponent);
export { TermsOfUseComponent };
//# sourceMappingURL=terms-of-use.component.js.map