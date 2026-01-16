import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login = '';
  pass = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  doLogin() {
    this.error = false;
    if (this.auth.login(this.login, this.pass)) this.router.navigateByUrl('/stronaGlowna');
    else this.error = true;
  }

  forgot() {
    alert('Frontend-only: przypomnienie hasła');
  }

  register() {
    alert('Frontend-only: rejestracja');
  }
}
