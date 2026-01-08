import { Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostsService, Post } from '../../core/posts';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [NgFor, NgIf, RouterLink, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  selected: Post | null = null;

  constructor(private posts: PostsService) {}

  get allPosts() {
    return this.posts.getAll();
  }

  open(p: Post) {
    this.selected = p;
  }

  close() {
    this.selected = null;
  }
}
