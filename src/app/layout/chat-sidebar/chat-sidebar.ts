import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-chat-sidebar',
  imports: [NgFor, RouterLink],
  templateUrl: './chat-sidebar.html',
  styleUrl: './chat-sidebar.scss',
})
export class ChatSidebar {
  people = [
    { id: 'dariusz', name: 'Dariusz Janicki' },
    { id: 'jakub', name: 'Jakub Janiszewski' },
    { id: 'bartosz', name: 'Bartosz Andrzejkiewicz' },
  ];
}
