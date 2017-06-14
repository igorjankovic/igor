import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { AccommodationTypeListComponent } from './accommodation-type-list/accommodation-type-list.component';
//import { AccommodationTypeComponent } from './accommodation-type/accommodation-type.component';
//import { AccommodationComponent } from './accommodation/accommodation.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    //AccommodationTypeListComponent,
    //AccommodationTypeComponent,
    //AccommodationComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
