import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserStore } from '../stores/user.store';
import { PostStore } from '../stores/posts.store';

import * as _ from 'lodash';

@Injectable()
export class AppInitResolver implements Resolve<any> {
  constructor(private userStore: UserStore, private postStore: PostStore) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Observable.create(observer => {
      Observable.forkJoin(
        this.userStore.init(),
        this.postStore.init()
      ).subscribe(results => {
        const [users, posts] = results;

        console.log(posts, users);

        this.postStore.store(
          posts.map(post => {
            post.$$user = _.find(users, { id: post.userId });
            return post;
          })
        );

        observer.next(null);
        observer.complete();
      });
    });
  }
}
