import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let LevelPageModalComponent = class LevelPageModalComponent {
    constructor() { }
    ngOnInit() {
    }
    getCurrentLevel(level) {
        let state;
        switch (level.toLowerCase()) {
            case 'vip':
                state = 3;
                break;
            case 'gold':
                state = 2;
                break;
            case 'silver':
                state = 1;
                break;
            default:
                state = 0;
        }
        return state;
    }
};
__decorate([
    Input()
], LevelPageModalComponent.prototype, "level", void 0);
LevelPageModalComponent = __decorate([
    Component({
        selector: 'app-level-page-modal',
        templateUrl: './level-page-modal.component.html',
        styleUrls: ['./level-page-modal.component.css']
    })
], LevelPageModalComponent);
export { LevelPageModalComponent };
//# sourceMappingURL=level-page-modal.component.js.map