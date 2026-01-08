import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChatService } from '../../core/chat';

@Component({
  standalone: true,
  selector: 'app-chat',
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {
  chatId = '';
  input = '';

  @ViewChild('scrollBox') scrollBox?: ElementRef<HTMLDivElement>;

  constructor(private route: ActivatedRoute, private chat: ChatService) {
    this.route.paramMap.subscribe(p => {
      this.chatId = p.get('id') ?? 'unknown';
      setTimeout(() => this.scrollToBottom(), 0);
    });
  }

  get messages() {
    return this.chat.getMessages(this.chatId);
  }

  send() {
    const txt = this.input.trim();
    if (!txt) return;

    this.chat.send(this.chatId, txt);
    this.input = '';
    setTimeout(() => this.scrollToBottom(), 0);

    // fake reply
    setTimeout(() => {
      this.chat.reply(this.chatId, 'OK 👍 (auto-reply demo)');
      this.scrollToBottom();
    }, 600);
  }

  private scrollToBottom() {
    const el = this.scrollBox?.nativeElement;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }
}
