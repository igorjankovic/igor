import { Injectable } from '@angular/core';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddAccTypeService {

    constructor(private http: Http)
    {
       
    }

    create(accType: AccommodationType) : Observable<any> {
       
        let header = new Headers();
        header.append('Content-Type', 'application/json');
       

        let options = new RequestOptions();
        options.headers = header;
        
        let host ="localhost:54042";
        return this.http.post(`http://${host}/api/AccommodationTypes`, JSON.stringify(accType), options);
    }

    update() {
        
    }
}