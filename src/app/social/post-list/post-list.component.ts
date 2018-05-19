import { Component, OnInit } from '@angular/core';
import { PostStore } from '../../core/stores';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postStore: PostStore) {}

  ngOnInit() {
    this.getPostStore();
  }

  private getPostStore() {
    this.postStore.getAll().subscribe(posts => (this.posts = posts));
  }
}
