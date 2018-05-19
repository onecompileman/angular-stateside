import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import {Observable} from "rxjs";
import {Comment} from "../../shared/models/comment.model";

@Injectable()
export class CommentService {

  constructor(private restangular: Restangular) {}

  getAll(): Observable<Comment[]> {
    return this.restangular.all('comments').getList();
  }

  getById(commentId: number): Observable<Comment> {
    return this.restangular.one('comments', commentId).get();
  }

  delete(commentId: number): Observable<any> {
    return this.restangular.one('comments', commentId).remove();
  }

  update(commentId: number, user: Comment): Observable<Comment> {
    return this.restangular.one('comments', commentId).customPUT(user);
  }

  create(comment: Comment): Observable<Comment> {
    return this.restangular.all('comments').post(comment);
  }

  getAllByPostId(postId: number): Observable<Comment[]> {
    return this.restangular.one('posts', postId).getList();
  }

}