import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
let EditOrderComponent = class EditOrderComponent {
    constructor() { }
    canDeactivate() {
        let state;
        state = (localStorage.getItem('is_submitting') === 'true') || (localStorage.getItem('file_update') === 'true') ? true : false;
        localStorage.removeItem('is_submitting');
        localStorage.removeItem('file_update');
        return state;
    }
    ngOnInit() {
    }
};
__decorate([
    HostListener('window:beforeunload')
], EditOrderComponent.prototype, "canDeactivate", null);
EditOrderComponent = __decorate([
    Component({
        selector: 'app-edit-order',
        templateUrl: './edit-order.component.html',
        styleUrls: ['./edit-order.component.css']
    })
], EditOrderComponent);
export { EditOrderComponent };
//# sourceMappingURL=edit-order.component.js.map