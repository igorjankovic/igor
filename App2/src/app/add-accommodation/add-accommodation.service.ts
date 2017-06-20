import { Injectable } from '@angular/core';
import { Accommodation } from '../accommodation/accommodation.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddAccommodationService {

    constructor(private http: Http)
    {
       
    }

    create(accommodation: Accommodation) : Observable<any> {
       
        
        let header = new Headers();
        header.append('Accept', 'application/json');
        header.append('Content-Type', 'application/json');

        let options = new RequestOptions();
        options.headers = header;
        
        let host = "localhost:54042";
          let urlAddress =`http://${host}/api/Accommodations`
        return this.http.post(urlAddress, JSON.stringify(accommodation), options);
    }
}