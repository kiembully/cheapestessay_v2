import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable()
], AuthGuard);
export { AuthGuard };
let PendingChangesGuard = class PendingChangesGuard {
    canDeactivate(component) {
        // if there are no pending changes, just allow deactivation; else confirm first
        return component.canDeactivate() ? true : this.confirmResponse();
    }
    confirmResponse() {
        if ((confirm('WARNING: You have unsaved changes. Leave?')) == true) {
            localStorage.removeItem('set_order_token');
            localStorage.removeItem('order_token');
            localStorage.removeItem('discount_token');
            localStorage.removeItem('uploaded_token');
            localStorage.removeItem('is_editing');
            localStorage.removeItem('is_submitting');
            return true;
        }
        else {
            return false;
        }
    }
};
PendingChangesGuard = __decorate([
    Injectable()
], PendingChangesGuard);
export { PendingChangesGuard };
//# sourceMappingURL=auth.guard.js.map