import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { services_functions } from 'src/app/data/ui-services';
import { service_object } from 'src/app/data/data';
let CtaButtonComponent = class CtaButtonComponent {
    constructor(route, router, _service, _fxServices) {
        this.route = route;
        this.router = router;
        this._service = _service;
        this._fxServices = _fxServices;
        this.services = this._service.service;
        this.url = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
    }
    getCtaText() {
        if (this.customCTA == null) {
            return this._fxServices.getCTA(this.url, this.services) != null ? this._fxServices.getCTA(this.url, this.services).cta[0].text : 'Write My Paper';
        }
        else {
            return this.customCTA;
        }
    }
};
__decorate([
    Input()
], CtaButtonComponent.prototype, "customCTA", void 0);
CtaButtonComponent = __decorate([
    Component({
        selector: 'app-cta-button',
        templateUrl: './cta-button.component.html',
        providers: [service_object, services_functions],
        styleUrls: ['./cta-button.component.css'],
        encapsulation: ViewEncapsulation.None,
    })
], CtaButtonComponent);
export { CtaButtonComponent };
//# sourceMappingURL=cta-button.component.js.map