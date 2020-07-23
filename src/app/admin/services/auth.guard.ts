import { Router, CanActivate, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(/* route: ActivatedRouteSnapshot, state: RouterStateSnapshot */): true | UrlTree {
    if (!this.auth.isLoggedIn) {
      this.auth.tryAutoLogin();
    }
    return this.auth.isLoggedIn ? true : this.router.createUrlTree(['/admin/login']);
  }
}
