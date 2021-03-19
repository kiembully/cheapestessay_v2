import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LogoutComponent = class LogoutComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    logoutUser() {
        this.dialogRef.close();
        localStorage.clear();
        this.router.navigate(['/']);
    }
};
LogoutComponent = __decorate([
    Component({
        selector: 'app-logout',
        templateUrl: './logout.component.html',
        styleUrls: ['./logout.component.css']
    })
], LogoutComponent);
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map