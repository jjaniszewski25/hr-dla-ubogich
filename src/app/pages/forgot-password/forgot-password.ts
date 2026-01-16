import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  email = '';
  error = '';
  done = false;

  submit() {
    this.error = '';
    this.done = false;

    if (!this.email.trim()) {
      this.error = 'Podaj e-mail.';
      return;
    }
    if (!this.email.includes('@')) {
      this.error = 'Podaj poprawny e-mail.';
      return;
    }

    // frontend-only: symulacja wysyłki
    this.done = true;
  }
}
