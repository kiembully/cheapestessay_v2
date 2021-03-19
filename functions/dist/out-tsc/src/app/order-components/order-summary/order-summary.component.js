import { __decorate } from "tslib";
import { Component, HostListener, Input } from '@angular/core';
import { loggedin_session } from '../../data/ui-services';
let OrderSummaryComponent = class OrderSummaryComponent {
    constructor(_session) {
        this._session = _session;
        this.isFixed = false;
    }
    ngOnInit() {
    }
    change_position(e) {
        let state;
        // state = (!this._session.isTokenExisting('user_token') ? state = (e >= 518) ? true : false : state = (e >= 345) ? true : false )
        if (this._session.isTokenExisting('user_token')) {
            state = ((e > 78) && (e < 1030)) ? true : false;
        }
        else {
            state = ((e > 305) && (e < 1257)) ? true : false;
        }
        return state;
    }
    onWindowScroll() {
        this.isFixed = this.change_position(window.pageYOffset);
    }
};
__decorate([
    Input()
], OrderSummaryComponent.prototype, "total_price", void 0);
__decorate([
    HostListener('window:scroll', [])
], OrderSummaryComponent.prototype, "onWindowScroll", null);
OrderSummaryComponent = __decorate([
    Component({
        selector: 'app-order-summary',
        templateUrl: './order-summary.component.html',
        providers: [loggedin_session],
        styleUrls: ['./order-summary.component.css']
    })
], OrderSummaryComponent);
export { OrderSummaryComponent };
//# sourceMappingURL=order-summary.component.js.map