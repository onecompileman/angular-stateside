import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import {Observable} from "rxjs";
import {User} from "../../shared/models/user/user.model";

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) {}

  getAll(): Observable<User[]> {
    return this.restangular.all('users').getList();
  }

  getById(userId: number): Observable<User> {
    return this.restangular.one('users', userId).get();
  }

  delete(userId: number): Observable<any> {
    return this.restangular.one('users', userId).remove();
  }

  update(userId: number, user: User): Observable<User> {
    return this.restangular.one('users', userId).customPUT(user);
  }

  create(user: User): Observable<User> {
    return this.restangular.all('users').post(user);
  }

}