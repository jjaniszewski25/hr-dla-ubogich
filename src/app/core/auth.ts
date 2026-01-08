import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'loggedIn';

  get isLoggedIn(): boolean {
    return localStorage.getItem(this.key) === '1';
  }

  login(login: string, pass: string): boolean {
    const ok = login.trim().length > 0 && pass.trim().length > 0;
    if (ok) localStorage.setItem(this.key, '1');
    return ok;
  }

  logout(): void {
    localStorage.removeItem(this.key);
  }
}
