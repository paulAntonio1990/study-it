import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenHandlingService} from "../services/token-handling.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedIdGuard implements CanActivate {

  constructor(private tokenHandler: TokenHandlingService,
              private router: Router) {}

  canActivate() {
    if (!!this.tokenHandler.getToken()) {
      return true;
    } else {
      this.redirectToLoginPage();
      return false;
    }
  }

  private redirectToLoginPage() {
    this.router.navigate(['/login']).then(() => window.location.reload());
  }

}
