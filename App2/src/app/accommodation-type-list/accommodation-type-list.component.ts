import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { AccommodationTypeListService } from './accommodation-type-list.service';
import {Accommodation} from '../accommodation/accommodation.model';
import {Router,ActivatedRoute} from '@angular/router';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';

@Component({
  selector: 'accommodation-type-list',
  templateUrl: './accommodation-type-list.component.html',
  styleUrls: ['./accommodation-type-list.component.css']
})
export class AccommodationTypeListComponent  {
accommodationTypes: AccommodationType[];
  accommodation: AccommodationType;
  Message: string = "";

  constructor(private accommodationTypeService: AccommodationTypeListService, private router: Router) { 

    this.accommodationTypes = [];
  }

  ngOnInit() {
    this.getAccommodationTypes()
  }

//  showAddAccTypeForm() {
 //   this.router.navigate(['/addAccType']);
 // }

 
  getAccommodationTypes() {
    this.accommodationTypeService.getAll().subscribe( x => this.accommodationTypes=x.json());
  }


   deleteAccommodationType(id: number) {
   this.Message = "";

    this.accommodationTypeService.deleteAccommodationType(id).subscribe(
        x => {  this.Message="Accommodation type deleted successfuly!";

                let index: number = -1;
                let i: number = 0;
                for (let accType of this.accommodationTypes) {
                  if (accType.Id == id){
                    index = i;
                    break;
                  }
                  i = i+1;
                }
                if (index !== -1) {
                  this.accommodationTypes.splice(index, 1);
                }
              }, 

       x => alert(x.json().Message));
  }

   editAccommodationType(id: number, name: string) {
      this.router.navigate(['/editAccommodationType', id, name]);
   }
}


