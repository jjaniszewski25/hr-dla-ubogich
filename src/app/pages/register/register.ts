import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  name = '';
  email = '';
  password = '';
  password2 = '';

  error = '';
  done = false;

  constructor(private router: Router) {}

  submit() {
    this.error = '';
    this.done = false;

    if (!this.name.trim() || !this.email.trim() || !this.password.trim()) {
      this.error = 'Uzupełnij wszystkie pola.';
      return;
    }
    if (!this.email.includes('@')) {
      this.error = 'Podaj poprawny e-mail.';
      return;
    }
    if (this.password.length < 4) {
      this.error = 'Hasło musi mieć min. 4 znaki.';
      return;
    }
    if (this.password !== this.password2) {
      this.error = 'Hasła nie są takie same.';
      return;
    }

    // frontend-only: zapis demo
    localStorage.setItem('demo_user', JSON.stringify({ name: this.name, email: this.email }));

    this.done = true;
    setTimeout(() => this.router.navigateByUrl('/login'), 900);
  }
}
