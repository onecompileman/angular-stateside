import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './social/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './social/post/post.component';
import { UserComponent } from './social/user/user.component';
import { UserListComponent } from './social/user-list/user-list.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [MainComponent, PostListComponent, PostComponent, UserComponent, UserListComponent],
  exports: [MainComponent, PostListComponent]
})
export class MainModule {}
