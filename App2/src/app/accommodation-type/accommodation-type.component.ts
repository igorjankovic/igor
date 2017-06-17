import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import {AccommodationType} from '../accommodation-type/accommodation-type.model';
import {AccommodationTypeService} from './accommodation-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'accommodation-type',
  templateUrl: './accommodation-type.component.html',
  styleUrls: ['./accommodation-type.component.css']
})
export class AccommodationTypeComponent implements OnInit {

 Id: number = -1;
  AccommodationTypeName: string;
  Message: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
              private accommodationTypeService: AccommodationTypeService,
             ) { 
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]; 
                                               this.AccommodationTypeName = params["Name"];});
   
  }

  ngOnInit() {
     
   }

   deleteAccommodationType() {
    this.Message = "";
    this.accommodationTypeService.delete(this.Id).subscribe(
      x => {this.Message="Accommodation type deleted successfuly!"; 
            this.router.navigate(['/accommodationTypeList'])}, 
      x => this.Message=x.json().Message)
  }

   editAccommodationType() {
      this.router.navigate(['/editAccommodationType', this.Id, this.AccommodationTypeName]);
   }


}
