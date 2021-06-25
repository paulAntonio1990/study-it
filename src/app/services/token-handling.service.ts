import { Injectable } from '@angular/core';

const TOKEN_KEY = 'authentication-token';
const USER_KEY = 'authenticated-user';

@Injectable({
  providedIn: 'root'
})
export class TokenHandlingService {

  constructor() { }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
}
