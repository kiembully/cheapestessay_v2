import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate } from '@angular/router';
import { ApiServices } from 'src/app/api.service';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: ApiServices, private router: Router) {}
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    // if there are no pending changes, just allow deactivation; else confirm first
    return component.canDeactivate() ? true : this.confirmResponse();
  }

  confirmResponse() {
    if ((confirm('WARNING: You have unsaved changes. Leave?')) == true) {
      localStorage.removeItem('set_order_token');
      localStorage.removeItem('order_token');
      localStorage.removeItem('discount_token');
      localStorage.removeItem('uploaded_token');
      localStorage.removeItem('pre_upload');
      return true;
    } else {
      return false;
    }
  }
  
}