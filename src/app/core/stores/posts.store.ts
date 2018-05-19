import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { User } from '../../shared/models/user/user.model';
import { Post } from '../../shared/models/post.model';

@Injectable()
export class PostStore {
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject([]);

  constructor(private postService: PostService) {}

  init(): Observable<any> {
    return Observable.create(observer => {
      this.postService.getAll().subscribe(posts => {
        this.posts$.next(posts);
        observer.next(posts);
        observer.complete();
      });
    });
  }

  store(posts: Post[]) {
    this.posts$.next(posts);
  }

  getAll(): Observable<Post[]> {
    return this.posts$.asObservable();
  }

  getAllSnapshot(): Post[] {
    return this.posts$.getValue();
  }
}
