import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CoreModule } from './core/core.module';
import { PostListComponent } from './social/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './social/post/post.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [MainComponent, PostListComponent, PostComponent],
  exports: [MainComponent, PostListComponent]
})
export class MainModule {}
