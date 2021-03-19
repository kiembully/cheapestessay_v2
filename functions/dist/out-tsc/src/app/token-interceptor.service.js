import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ApiServices } from 'src/app/api.service';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        if (req.headers.get('skip') !== undefined) {
            const newHeaders = req.headers.delete('skip');
            const newRequest = req.clone({ headers: newHeaders });
            return next.handle(newRequest);
        }
        else {
            let authService = this.injector.get(ApiServices);
            let tokenizedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${authService.getToken()}`
                }
            });
            return next.handle(tokenizedReq);
        }
    }
};
TokenInterceptorService = __decorate([
    Injectable()
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map