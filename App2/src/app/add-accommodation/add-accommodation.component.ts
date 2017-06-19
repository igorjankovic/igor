import { Component, OnInit , NgZone} from '@angular/core';
import { Accommodation } from '../accommodation/accommodation.model';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';
import { AccommodationTypeListService } from '../accommodation-type-list/accommodation-type-list.service';
import { AddAccommodationService } from './add-accommodation.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
@Component({
  selector: 'add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.css'],
    providers: [ AccommodationTypeListService, AddAccommodationService]

})
export class AddAccommodationComponent implements OnInit {

   Name: string;
  Description: string;
  Address: string;
  Latitude: number;
  Longitude: number;
  accTypes: AccommodationType[];
  AccommodationTypeId: number;
 
 constructor(private accTypeListService: AccommodationTypeListService,
    private addAccommodationService: AddAccommodationService, private router: Router) {
   
    this.accTypes = [];
    }
  ngOnInit() {
    this.accTypeListService.getAll().subscribe(x => this.accTypes = x.json());
  }
onSubmit() {
    
    
    let newAccommodation = new Accommodation(1, this.Name, this.Description, this.Address, 0, this.Latitude, this.Longitude, "", false,
      this.AccommodationTypeId,1);

    this.addAccommodationService.create(newAccommodation).subscribe(x => 
    { 
      this.router.navigate(['/accommodationList']);}, 
      x => alert(x.json().Message));
  }


  }

