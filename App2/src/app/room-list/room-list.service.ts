import { Injectable } from '@angular/core';
import { Room } from '../room/room.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomListService {

    constructor(private http: Http) {

    }

    getAll() {
        let host = "localhost:54042";
         return this.http.get(`http://${host}/api/Rooms`);
    }
}

