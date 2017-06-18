import { Injectable } from '@angular/core';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditAccTypeService {

    constructor(private http: Http)
    {
       
    }

    edit(accType: AccommodationType){
      
        let header = new Headers();
        header.append('Content-Type', 'application/json');
       

        let options = new RequestOptions();
        options.headers = header;
        
        let host = "localhost:54042";
        let urlAddress = `http://${host}/api/AccommodationTypes/` + accType.Id;
        return this.http.put(urlAddress, JSON.stringify(accType), options);
    }

    update() {
        
    }
}