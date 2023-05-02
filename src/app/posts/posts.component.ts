import { Component } from '@angular/core';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  get post() {
    return this.postsService.posts;
  }
  constructor(public postsService: PostsService) {}
}
