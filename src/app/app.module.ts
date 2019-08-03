import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
