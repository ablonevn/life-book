import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from '../header/header.component';
import * as mat from '@angular/material';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent,mat.MatToolbar,mat.MatButton
    ,mat.MatRipple ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
