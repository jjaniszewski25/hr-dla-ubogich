import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

type ProfileModel = { name: string; age: number | null; gender: string; position: string };

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [FormsModule, NgIf],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private key = 'profile';
  saved = false;

  model: ProfileModel = this.load();

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.model));
    this.saved = true;
    setTimeout(() => (this.saved = false), 1200);
  }

  private load(): ProfileModel {
    const raw = localStorage.getItem(this.key);
    if (!raw) return { name: 'Jan Kowalski', age: 21, gender: 'M', position: 'Praktykant' };
    try {
      return JSON.parse(raw) as ProfileModel;
    } catch {
      return { name: 'Jan Kowalski', age: 21, gender: 'M', position: 'Praktykant' };
    }
  }
}
