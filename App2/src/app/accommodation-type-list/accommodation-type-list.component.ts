import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

import { AccommodationType } from '../accommodation-type/accommodation-type.model';

@Component({
  selector: 'accommodation-type-list',
  templateUrl: './accommodation-type-list.component.html',
  styleUrls: ['./accommodation-type-list.component.css']
})
export class AccommodationTypeListComponent  {

@Input() accommodationtypes: AccommodationType[];


  constructor() { }

 private currentAccomodationType: AccommodationType;

}
