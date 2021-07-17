import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenHandlingService} from "../services/token-handling.service";

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private tokenHandler: TokenHandlingService,
              private router: Router) {}

  canActivate() {
    const isLoggedIn = !!this.tokenHandler.getToken();
    const user = this.tokenHandler.getUser();
    if (isLoggedIn && this.isAdmin(user.role)) {
      return true;
    } else {
      this.redirectToUnauthorizedPage();
      return false;
    }
  }

  private redirectToUnauthorizedPage() {
    this.router.navigate(['/unauthorized']).then(() => window.location.reload());
  }

  isAdmin(userRole: string) {
    return userRole === 'ROLE_ADMIN';
  }
}
