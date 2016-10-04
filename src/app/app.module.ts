import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { otherComponents } from './othercomponents'

@NgModule({
  imports: [
    BrowserModule, routing
  ],
  declarations: [
    AppComponent,
    ...otherComponents
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
