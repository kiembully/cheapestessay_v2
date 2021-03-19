import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let user_functions = class user_functions {
    getUserStatus() {
        let status = 0;
        const user = localStorage.getItem('user_token');
        status = (!user) ? 0 : 1;
        return status;
    }
    getCurrentPath() {
        let path;
        path = window.location.pathname;
        return path.replace(/\//, "");
    }
};
user_functions = __decorate([
    Injectable()
], user_functions);
export { user_functions };
//# sourceMappingURL=user-data.js.map