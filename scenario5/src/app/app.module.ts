import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
