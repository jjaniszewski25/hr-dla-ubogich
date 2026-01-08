import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-structure',
  imports: [NgFor],
  templateUrl: './structure.html',
  styleUrl: './structure.scss',
})
export class Structure {
  chain = ['Prezes - Maciej Jurewicz', 'Przełożony - Piotr Łukasiewicz', 'Zastępca Przełożonego - Stanisław Wokulski ', 'Pracownik wsparcia IT - Adam Nowak', 'Korposzczur - Jakub Janiszewski', 'Korposzczur - Darek Janicki', 'Korposzczur Bartosz Andrzejkiewicz' ];
}
