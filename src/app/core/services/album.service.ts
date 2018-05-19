import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import {Observable} from "rxjs";
import {Album} from "../../shared/models/album.model";

@Injectable()
export class AlbumService {

  constructor(private restangular: Restangular) {}

  getAll(): Observable<Album[]> {
    return this.restangular.all('albums').getList();
  }

  getById(albumId: number): Observable<Album> {
    return this.restangular.one('albums', albumId).get();
  }

  delete(albumId: number): Observable<any> {
    return this.restangular.one('albums', albumId).remove();
  }

  update(albumId: number, user: Album): Observable<Album> {
    return this.restangular.one('albums', albumId).customPUT(user);
  }

  create(album: Album): Observable<Album> {
    return this.restangular.all('albums').post(album);
  }

  getAllByUserId(userId: number): Observable<Album[]> {
    return this.restangular.one('users',userId).all('albums').getList();
  }

}