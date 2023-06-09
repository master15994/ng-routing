import { Component, OnInit } from '@angular/core';
import { PostsService } from '../post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showIds = false;

  get post() {
    return this.postsService.posts;
  }
  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = params['showIds'];
    });
  }

  showIdProgram() {
    this.router.navigate(['/posts'], { queryParams: { showIds: true } });
  }
}
