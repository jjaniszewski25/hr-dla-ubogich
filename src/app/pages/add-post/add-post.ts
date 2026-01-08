import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PostsService } from '../../core/posts';

@Component({
  standalone: true,
  selector: 'app-add-post',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './add-post.html',
  styleUrl: './add-post.scss',
})
export class AddPost {
  title = '';
  content = '';
  error = false;

  constructor(private posts: PostsService, private router: Router) {}

  add() {
    this.error = false;
    if (!this.title.trim() || !this.content.trim()) {
      this.error = true;
      return;
    }
    this.posts.add(this.title.trim(), this.content.trim());
    this.router.navigateByUrl('/stronaGlowna');
  }
}
