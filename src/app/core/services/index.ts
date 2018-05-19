import {AlbumService} from "./album.service";
import {CommentService} from "./comment.service";
import {PhotoService} from "./photo.service";
import {PostService} from "./post.service";
import {UserService} from "./user.service";

export const services: any[] = [
  AlbumService,
  CommentService,
  PhotoService,
  PostService,
  UserService
];

export * from "./album.service";
export * from "./comment.service";
export * from "./photo.service";
export * from "./post.service";
export * from "./user.service";