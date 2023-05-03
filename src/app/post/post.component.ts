import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Post, PostsService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post | undefined;

  constructor(public route: ActivatedRoute, public postservice: PostsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.post = this.postservice.getById(+params['id']);
    });
  }
}
