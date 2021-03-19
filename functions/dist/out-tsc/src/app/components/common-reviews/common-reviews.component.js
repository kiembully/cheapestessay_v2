import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let CommonReviewsComponent = class CommonReviewsComponent {
    constructor() {
        this.clientReviews = {
            loop: true,
            dots: false,
            margin: 20,
            nav: false,
            center: true,
            responsive: {
                0: {
                    items: 2,
                    dots: true,
                },
                768: {
                    items: 3,
                    dots: true,
                }
            }
        };
    }
    ngOnInit() {
    }
};
CommonReviewsComponent = __decorate([
    Component({
        selector: 'app-common-reviews',
        templateUrl: './common-reviews.component.html',
        styleUrls: ['./common-reviews.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], CommonReviewsComponent);
export { CommonReviewsComponent };
//# sourceMappingURL=common-reviews.component.js.map