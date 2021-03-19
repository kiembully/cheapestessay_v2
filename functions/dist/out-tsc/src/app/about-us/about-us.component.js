import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AboutUsComponent = class AboutUsComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("About Company | Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "Cheapest Essay provides the top level writing and editing services at a reasonable price. We have the best content writer to write your views artistically." });
        this.metaTagService.updateTag({ name: 'keywords', content: "professional paper writing service, professional research paper writers, best professional resume writers, resume writing services cost, coursework assistance, paper proofreading service, writing proofreading, professional powerpoint services" });
    }
};
AboutUsComponent = __decorate([
    Component({
        selector: 'app-about-us',
        templateUrl: './about-us.component.html',
        styleUrls: ['./about-us.component.css']
    })
], AboutUsComponent);
export { AboutUsComponent };
//# sourceMappingURL=about-us.component.js.map