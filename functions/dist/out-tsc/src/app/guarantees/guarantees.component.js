import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let GuaranteesComponent = class GuaranteesComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Guarantees - Cheapest Essay");
        this.metaTagService.updateTag({ name: 'description', content: "Our writing and editing services guarantee is individual and invincible. We challenge after reading our policies you perceive rest full about working with us." });
        this.metaTagService.updateTag({ name: 'keywords', content: "unique article writer, blog article writers, content and article writing service, online research paper writing service, professional cv writing service, essay proofreading service" });
    }
};
GuaranteesComponent = __decorate([
    Component({
        selector: 'app-guarantees',
        templateUrl: './guarantees.component.html',
        styleUrls: ['./guarantees.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], GuaranteesComponent);
export { GuaranteesComponent };
//# sourceMappingURL=guarantees.component.js.map