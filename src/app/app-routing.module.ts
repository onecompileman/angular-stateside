import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { AppInitResolver } from './core/resolvers/app-init.resolver';
import { PostListComponent } from './social/post-list/post-list.component';
import { UserListComponent } from './social/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PostListComponent
      },
      {
        path: 'users',
        pathMatch: 'full',
        component: UserListComponent
      }
    ],
    resolve: {
      init: AppInitResolver
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
