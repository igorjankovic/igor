import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AccommodationTypeListComponent} from './accommodation-type-list/accommodation-type-list.component';
import {AccommodationTypeComponent} from './accommodation-type/accommodation-type.component';
import { AddAccTypeComponent } from './add-acc-type/add-acc-type.component';
import { EditAccTypeComponent } from './edit-acc-type/edit-acc-type.component';
//import {AccommodationComponent} from './accommodation/accommodation.component';
const ChildRoutes = [
   
 ]
const Routes= [
  // {path: "accommodation/:Id", component: AccommodationComponent},
  //{path: "accommodationList/:Id/:Name/:Origin/:PlaceName", component: AccommodationListComponent},
  {path: "accommodationTypeList", component: AccommodationTypeListComponent},
  {path: "accommodationType/:Id/:Name", component: AccommodationTypeComponent},
  {path: "addAccType",  component: AddAccTypeComponent},
  {path: "editAccommodationType/:Id/:Name",  component: EditAccTypeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccommodationTypeListComponent,
    AccommodationTypeComponent,
    AddAccTypeComponent,
    EditAccTypeComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
