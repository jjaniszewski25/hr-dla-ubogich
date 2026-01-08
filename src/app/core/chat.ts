import { Injectable } from '@angular/core';

export type ChatMsg = {
  id: string;
  from: 'me' | 'them';
  text: string;
  ts: number;
};

@Injectable({ providedIn: 'root' })
export class ChatService {
  private keyPrefix = 'chat_';

  getMessages(chatId: string): ChatMsg[] {
    const raw = localStorage.getItem(this.keyPrefix + chatId);
    if (!raw) return this.seed(chatId);

    try {
      const arr = JSON.parse(raw) as ChatMsg[];
      return Array.isArray(arr) ? arr : this.seed(chatId);
    } catch {
      return this.seed(chatId);
    }
  }

  send(chatId: string, text: string) {
    const msgs = this.getMessages(chatId);
    msgs.push({ id: crypto.randomUUID(), from: 'me', text, ts: Date.now() });
    localStorage.setItem(this.keyPrefix + chatId, JSON.stringify(msgs));
  }

  reply(chatId: string, text: string) {
    const msgs = this.getMessages(chatId);
    msgs.push({ id: crypto.randomUUID(), from: 'them', text, ts: Date.now() });
    localStorage.setItem(this.keyPrefix + chatId, JSON.stringify(msgs));
  }

  private seed(chatId: string): ChatMsg[] {
    const msgs: ChatMsg[] = [
      { id: crypto.randomUUID(), from: 'them', text: `Hi! This is chat: ${chatId}`, ts: Date.now() - 300000 },
      { id: crypto.randomUUID(), from: 'me', text: 'Hello! (frontend-only)', ts: Date.now() - 240000 },
    ];
    localStorage.setItem(this.keyPrefix + chatId, JSON.stringify(msgs));
    return msgs;
  }
}
