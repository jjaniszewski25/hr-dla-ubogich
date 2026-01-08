import { Injectable } from '@angular/core';

export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
};

@Injectable({ providedIn: 'root' })
export class PostsService {
  private key = 'posts';

  getAll(): Post[] {
    const raw = localStorage.getItem(this.key);
    if (!raw) return this.seed();

    try {
      const arr = JSON.parse(raw) as Post[];
      return Array.isArray(arr) ? arr : this.seed();
    } catch {
      return this.seed();
    }
  }

  add(title: string, content: string) {
    const posts = this.getAll();
    posts.unshift({
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: Date.now(),
    });
    localStorage.setItem(this.key, JSON.stringify(posts));
  }

  private seed(): Post[] {
    const posts: Post[] = [
      {
        id: crypto.randomUUID(),
        title: 'Aktualności',
        content: 'Przykładowy wpis startowy (localStorage).',
        createdAt: Date.now(),
      },
      {
        id: crypto.randomUUID(),
        title: 'Nowy wpis',
        content: 'Drugi wpis przykładowy. Możesz dodać własne.',
        createdAt: Date.now() - 3600_000,
      },
    ];
    localStorage.setItem(this.key, JSON.stringify(posts));
    return posts;
  }
}
