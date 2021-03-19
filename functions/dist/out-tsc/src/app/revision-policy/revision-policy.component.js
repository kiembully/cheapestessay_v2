import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RevisionPolicyComponent = class RevisionPolicyComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Revision Policy - Order Custom Writing Services");
        this.metaTagService.updateTag({ name: 'description', content: "Cheapest Essay is a very responsible and reliable company and customer satisfaction is a topmost priority so we will revise your work but please check all terms." });
        this.metaTagService.updateTag({ name: 'keywords', content: "revision policy" });
    }
};
RevisionPolicyComponent = __decorate([
    Component({
        selector: 'app-revision-policy',
        templateUrl: './revision-policy.component.html',
        styleUrls: ['./revision-policy.component.css']
    })
], RevisionPolicyComponent);
export { RevisionPolicyComponent };
//# sourceMappingURL=revision-policy.component.js.map