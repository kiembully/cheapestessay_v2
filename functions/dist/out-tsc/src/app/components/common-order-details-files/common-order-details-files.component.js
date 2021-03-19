import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DialogTriggers } from 'src/app/data/ui-services';
let CommonOrderDetailsFilesComponent = class CommonOrderDetailsFilesComponent {
    constructor(_dialog_trigger) {
        this._dialog_trigger = _dialog_trigger;
        this.hasWriterFiles = true;
    }
    ngOnInit() {
        localStorage.removeItem('file_update');
        this.hasWriterFiles = ((this.order_details.files.writer_files.data != null));
    }
    openMaterial(url) {
        window.open(url, '_blank');
    }
};
__decorate([
    Input()
], CommonOrderDetailsFilesComponent.prototype, "order_details", void 0);
CommonOrderDetailsFilesComponent = __decorate([
    Component({
        selector: 'app-common-order-details-files',
        templateUrl: './common-order-details-files.component.html',
        providers: [DialogTriggers],
        styleUrls: ['./common-order-details-files.component.css']
    })
], CommonOrderDetailsFilesComponent);
export { CommonOrderDetailsFilesComponent };
//# sourceMappingURL=common-order-details-files.component.js.map