import { Component, OnInit,Input } from '@angular/core';
import { Room } from '../room/room.model';
import {RoomService} from './room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Accommodation } from '../accommodation/accommodation.model';
@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomService]
})
export class RoomComponent implements OnInit {

  Room: Room;
  Rooms: Room[];
   RoomId : number;

 constructor(private router: Router, private activatedRoute: ActivatedRoute, 
              private roomService: RoomService) {
    this.Room = new Room();
    this.Room.Accommodation = new Accommodation();
    activatedRoute.params.subscribe(params => {this.RoomId = params["Id"];});
   }

  ngOnInit() {
  
     
        this.roomService.getById(this.RoomId).subscribe(x => { this.Rooms = x.json(); this.Room = this.Rooms[0]; }); 
     
  }

}
