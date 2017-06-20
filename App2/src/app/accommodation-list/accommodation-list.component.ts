import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../accommodation/accommodation.model';
import {AccommodationListService} from './accommodation-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.css'],
  providers: [AccommodationListService]
})
export class AccommodationListComponent implements OnInit {

   Id: number;
  Name: string;
  Accommodations: Accommodation[];
 
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accListService: AccommodationListService) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]; 
                                               this.Name = params["Name"] 
    }
    );
   }

  ngOnInit() {
    this.Accommodations = [];
    this.accListService.getAll().subscribe( x => this.Accommodations=x.json());
    
    //        this.accListService.getAll().subscribe(x => {
     //         this.Accommodations = (x.json()).value;
       //     }
        //    )
             
}
  }
  
