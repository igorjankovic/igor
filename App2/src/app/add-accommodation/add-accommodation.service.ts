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
        let formData: FormData = new FormData();
        formData.append('accommodation', JSON.stringify(accommodation));
        
        
        
        let header = new Headers();
        header.append('Accept', 'application/json');
        header.append('enctype', 'multipart/form-data');

        let options = new RequestOptions();
        options.headers = header;
        
        let host = "localhost:54042";
        return this.http.post(`http://${host}/api/Accommodations`, formData, options);
    }
}