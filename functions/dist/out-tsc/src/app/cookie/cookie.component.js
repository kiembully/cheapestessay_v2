import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CookieComponent = class CookieComponent {
    constructor() { }
    ngOnInit() {
    }
    hideCookieBar() {
        this.isCookieAnnouncementVisible = false;
        localStorage.setItem('cookie_bar_visibility', 'false');
    }
    isCookeBannerDisplayed() {
        return (!localStorage.getItem('cookie_bar_visibility')) ? true : false;
    }
};
CookieComponent = __decorate([
    Component({
        selector: 'app-cookie',
        templateUrl: './cookie.component.html',
        styleUrls: ['./cookie.component.css']
    })
], CookieComponent);
export { CookieComponent };
//# sourceMappingURL=cookie.component.js.map