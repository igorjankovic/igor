import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' 
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ContryComponent } from './contry/contry.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    ContryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
