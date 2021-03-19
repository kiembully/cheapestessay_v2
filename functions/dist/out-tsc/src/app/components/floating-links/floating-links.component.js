import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FloatingLinksComponent = class FloatingLinksComponent {
    constructor() {
        this.ishovered = false;
    }
    ngOnInit() {
    }
    hoverSocialLinks() {
        this.ishovered = true;
    }
    hoverOutSocialLinks() {
        this.ishovered = false;
    }
};
FloatingLinksComponent = __decorate([
    Component({
        selector: 'app-floating-links',
        templateUrl: './floating-links.component.html',
        styleUrls: ['./floating-links.component.css']
    })
], FloatingLinksComponent);
export { FloatingLinksComponent };
//# sourceMappingURL=floating-links.component.js.map