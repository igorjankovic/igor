import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { AccommodationTypeListComponent } from './accommodation-type-list/accommodation-type-list.component';
//import { AccommodationTypeComponent } from './accommodation-type/accommodation-type.component';
//import { AccommodationComponent } from './accommodation/accommodation.component';
import { LoginComponent } from './login/login.component';
import { AddAccommodationTypeComponent } from './add-accommodation-type/add-accommodation-type.component';
//import { AddAccommodationComponent } from './add-accommodation/add-accommodation.component';


@NgModule({
  declarations: [
    AppComponent,
    //AccommodationTypeListComponent,
    //AccommodationTypeComponent,
    //AccommodationComponent,
    LoginComponent,
    AddAccommodationTypeComponent,
    //AddAccommodationComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
