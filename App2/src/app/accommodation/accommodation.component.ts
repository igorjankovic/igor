import { Component, OnInit,Input } from '@angular/core';
import { Accommodation } from './accommodation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AccommodationService } from './accommodation.service';
import { User } from '../user-model/user.model';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';

@Component({
  selector: 'accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
   providers: [AccommodationService]
})
export class AccommodationComponent implements OnInit {

accommodationId: number;
  accommodation: Accommodation;
  accommodations: Accommodation[];
  
 constructor(private accommodationService: AccommodationService, private router: Router, private activatedRoute: ActivatedRoute,) { 

    activatedRoute.params.subscribe(params => {this.accommodationId = params["Id"];});

    this.accommodation = new Accommodation();
    this.accommodation.Owner = new User();
    this.accommodation.AccommodationType = new AccommodationType();
   

  }

  ngOnInit() {
      
     
      this.accommodationService.getById(this.accommodationId).subscribe(x => { this.accommodations = x.json();
        this.accommodation = this.accommodations[0];
        let host ="localhost:54042";
        
    });

  }

  deleteAcc(id) {
    this.accommodationService.delete(id).subscribe(x => {alert("Accommodation deleted successfuly!");
      this.router.navigate(['/accommodationList'])}, 
      x => alert(x.json().Message));
  }
  editAcc(id, name, desc, address, latitude, longitude, averageGr, approved, accTypeId, placeId,ownerId) {
    this.router.navigate(['/editAcc', id, name, desc, address, latitude, longitude, averageGr, approved, accTypeId, placeId, ownerId]);
  }


}
