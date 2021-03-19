import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PrivacyPolicyComponent = class PrivacyPolicyComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Privacy Policy - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "We request our visitors to read the privacy policy thoroughly and we make sure that every detail has been approved by it before sharing and utilizing it." });
        this.metaTagService.updateTag({ name: 'keywords', content: "privacypolicy" });
    }
};
PrivacyPolicyComponent = __decorate([
    Component({
        selector: 'app-privacy-policy',
        templateUrl: './privacy-policy.component.html',
        styleUrls: ['./privacy-policy.component.css']
    })
], PrivacyPolicyComponent);
export { PrivacyPolicyComponent };
//# sourceMappingURL=privacy-policy.component.js.map