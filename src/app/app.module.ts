import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MainModule } from './main.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule, BrowserModule, CoreModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
