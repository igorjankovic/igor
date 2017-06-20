import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { Room } from '../room/room.model';
import { Accommodation } from '../accommodation/accommodation.model';
import { RoomListService } from './room-list.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
    providers: [ RoomListService ]
})
export class RoomListComponent implements OnInit {

 Id: number;
  accommodationName: string;
 
  rooms: Room[];

  constructor(private roomListService: RoomListService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute
             ) {
    activatedRoute.params.subscribe(params => {this.Id = params["Id"]; 
                                              
                                             });
      
   }

  ngOnInit() {
    
      this.roomListService.getAll().subscribe(x => { this.rooms = x.json() });
    
  }
    
  }

