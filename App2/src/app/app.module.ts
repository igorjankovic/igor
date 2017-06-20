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
import {AccommodationComponent} from './accommodation/accommodation.component';
import {AccommodationListComponent} from './accommodation-list/accommodation-list.component';
import { AddAccommodationComponent } from './add-accommodation/add-accommodation.component';
import { EditAccommodationComponent } from './edit-accommodation/edit-accommodation.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';
const ChildRoutes = [
   
 ]
const Routes= [
   {path: "accommodation/:Id", component: AccommodationComponent},
  {path: "accommodationList/:Id/:Name", component: AccommodationListComponent},
  {path: "accommodationTypeList", component: AccommodationTypeListComponent},
  {path: "accommodationType/:Id/:Name", component: AccommodationTypeComponent},
  {path: "addAccType",  component: AddAccTypeComponent},
  {path: "editAccommodationType/:Id/:Name",  component: EditAccTypeComponent},
  {path: "addAccommodation",  component: AddAccommodationComponent},
  {path: "editAcc/:Id/:Name/:Description/:Address/:Latitude/:Longitude/:AverageGrade/:Approved/:AccommodationTypeId/:ImageUrl",  
    component: EditAccommodationComponent},
  {path: "roomList/:AccommodationId/:AccommodationName", component: RoomListComponent},
  {path: "room/:Id/:AccommodationName", component: RoomComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccommodationTypeListComponent,
    AccommodationTypeComponent,
    AddAccTypeComponent,
    EditAccTypeComponent,
    AccommodationComponent,
    AccommodationListComponent,
    AddAccommodationComponent,
    EditAccommodationComponent,
    RoomComponent,
    RoomListComponent
   
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
