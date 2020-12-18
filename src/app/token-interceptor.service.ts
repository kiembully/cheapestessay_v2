import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApiServices } from 'src/app/api.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    if (req.headers.get('skip') !== undefined) {
      const newHeaders = req.headers.delete('skip');
      const newRequest = req.clone({ headers: newHeaders });
      return next.handle(newRequest);
    } else {
      let authService = this.injector.get(ApiServices);
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
    }
  }
  
}
