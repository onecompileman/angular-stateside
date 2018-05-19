import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestangularModule} from "ngx-restangular";

import {throwIfAlreadyLoaded} from "./utils/module-import-guard";
import {RestangularConfigFactory} from "./requests/restangular-config.factory";

import {AlbumService} from "./services/album.service";
import {CommentService} from "./services/comment.service";
import {PhotoService} from "./services/photo.service";
import {PostService} from "./services/post.service";
import {UserService} from "./services/user.service";

@NgModule({
  imports: [
    CommonModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    AlbumService,
    CommentService,
    PhotoService,
    PostService,
    UserService
  ],
  declarations: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
