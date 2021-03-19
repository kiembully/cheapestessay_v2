import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
let CommonOverlappingCarouselComponent = class CommonOverlappingCarouselComponent {
    constructor(_auth) {
        this._auth = _auth;
        this.topWriters = [];
        this.orderWritten = {
            loop: false,
            dots: true,
            margin: 0,
            dotsEach: true,
            startPosition: 1,
            nav: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            },
        };
    }
    ngOnInit() {
        if (this.is_writers) {
            this.getTopWriters();
        }
    }
    getTopWriters() {
        this._auth.getTopWriters().subscribe(res => {
            this.topWriters = res.data;
        });
    }
};
__decorate([
    Input()
], CommonOverlappingCarouselComponent.prototype, "is_writers", void 0);
CommonOverlappingCarouselComponent = __decorate([
    Component({
        selector: 'app-common-overlapping-carousel',
        templateUrl: './common-overlapping-carousel.component.html',
        styleUrls: ['./common-overlapping-carousel.component.css'],
        providers: [ApiServices],
        encapsulation: ViewEncapsulation.None,
    })
], CommonOverlappingCarouselComponent);
export { CommonOverlappingCarouselComponent };
//# sourceMappingURL=common-overlapping-carousel.component.js.map