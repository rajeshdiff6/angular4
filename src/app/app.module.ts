import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharesComponent } from './shares.component';

import { Colorcustomdirective } from './directives/colordirective';

@NgModule({
  declarations: [
    AppComponent,
    SharesComponent,
    Colorcustomdirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
