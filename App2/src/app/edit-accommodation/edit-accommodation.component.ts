import { Component, OnInit } from '@angular/core';
import { Accommodation } from '../accommodation/accommodation.model';
import { EditAccommodationService } from './edit-accommodation.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
@Component({
  selector: 'app-edit-accommodation',
  templateUrl: './edit-accommodation.component.html',
  styleUrls: ['./edit-accommodation.component.css']
})
export class EditAccommodationComponent implements OnInit {

 Id: number;
  Name: string;
  Description: string;
  Adress: string;
  Latitude: number;
  Longitude: number;
  AvrageGrade: number;
  ImageUrl: string;
  Approved: boolean;
  AccommodationTypeId: number;
  file: File;

  constructor(private editAccommodationService: EditAccommodationService, private activatedRoute: ActivatedRoute, private router: Router) { 
      activatedRoute.params.subscribe(params => {this.Id = params["Id"]; this.Name = params["Name"];
      this.Description = params["Description"]; this.Adress = params["Address"]; this.Latitude = params["Latitude"];
      this.Longitude = params["Longitude"]; this.AvrageGrade = params["AverageGrade"];this.ImageUrl = params["ImageUrl"];
      this.Approved = params["Approved"]; this.AccommodationTypeId = params["AccommodationTypeId"];
     });
  }

  ngOnInit() {
  }

  onSubmit() {
    let newAcc = new Accommodation(this.Id, this.Name, this.Description, this.Adress, this.AvrageGrade, this.Latitude, this.Longitude,
    this.ImageUrl, this.Approved, this.AccommodationTypeId);
    this.editAccommodationService.edit(newAcc).subscribe(x => 
      {this.router.navigate(['/accommodation', this.Id])}, 
      x => alert(x.json().Message));
  }

}
