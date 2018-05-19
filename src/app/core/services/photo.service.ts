import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import {Observable} from "rxjs";
import {Photo} from "../../shared/models/photo.model";

@Injectable()
export class PhotoService {

  constructor(private restangular: Restangular) {}

  getAll(): Observable<Photo[]> {
    return this.restangular.all('photos').getList();
  }

  getById(photoId: number): Observable<Photo> {
    return this.restangular.one('photos', photoId).get();
  }

  delete(photoId: number): Observable<any> {
    return this.restangular.one('photos', photoId).remove();
  }

  update(photoId: number, photo: Photo): Observable<Photo> {
    return this.restangular.one('photos', photoId).customPUT(photo);
  }

  create(photo: Photo): Observable<Photo> {
    return this.restangular.all('photos').post(photo);
  }

  getAllByAlbumId(albumId: number): Observable<Photo[]> {
    return this.restangular.one('albums', albumId).all('photos').getList();
  }

}