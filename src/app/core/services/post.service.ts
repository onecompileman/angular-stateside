import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import {Observable} from "rxjs";
import {Post} from "../../shared/models/post.model";

@Injectable()
export class PostService {

  constructor(private restangular: Restangular) {}

  getAll(): Observable<Post[]> {
    return this.restangular.all('posts').getList();
  }

  getById(postId: number): Observable<Post> {
    return this.restangular.one('posts', postId).get();
  }

  delete(postId: number): Observable<any> {
    return this.restangular.one('posts', postId).remove();
  }

  update(postId: number, post: Post): Observable<Post> {
    return this.restangular.one('posts', postId).customPUT(post);
  }

  create(post: Post): Observable<Post> {
    return this.restangular.all('posts').post(post);
  }

  getPostsByUserId(userId: number) {
    return this.restangular.one('users', userId).all('posts').getList();
  }

}
