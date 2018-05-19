import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestangularModule } from 'ngx-restangular';

import * as fromServices from './services';
import * as fromResolvers from './resolvers';
import * as fromStores from './stores';
import * as fromComponents from './components';

import { throwIfAlreadyLoaded } from './utils/module-import-guard';
import { RestangularConfigFactory } from './requests/restangular-config.factory';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    ...fromServices.services,
    ...fromResolvers.resolvers,
    ...fromStores.stores
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
