import { Injectable } from '@angular/core';
import { Room } from '../room/room.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoomService {

    constructor(private http: Http)
    {
       
    }

    getAll() : Observable<any> {
        let host ="localhost:54042"
        return this.http.get(`http://${host}/api/Rooms`);
    }

    getById(id: number): Observable<any> {
        let host ="localhost:54042"
        let urlAddress = `http://${host}/api/Rooms` + id;
        return this.http.get(urlAddress);
    }

     delete(id: number) {
       
        let header = new Headers();
        header.append('Content-Type', 'application/json');
       

        let options = new RequestOptions();
        options.headers = header;
        
         let host ="localhost:54042"
        let urlAddress = `http://${host}/api/Rooms/` + id;
        return this.http.delete(urlAddress, options);
    }

}