import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Cheapest Essay Writing Service by Qualified Essay Writers $8/page");
        this.metaTagService.updateTag({ name: 'description', content: "Looking for the cheapest essay writing service Hire qualified essay writers, who will do your 'write my paper' requests. Save up to 15% on your first order." });
        this.metaTagService.updateTag({ name: 'keywords', content: "Cheapest essay writing service, write my paper, paper writing service, professional paper writing service, academic writing services, professional writing services, cheapest writing services, professional writers, cheap writing services, cheap essay writing services, essay writing service cheapest, writing paper service, professional essay writers, essay writers, online writing services,  affordable writing service" });
    }
    isTokenExisting(token_name) {
        const token = localStorage.getItem(token_name);
        let status = (!token);
        return status;
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map