import { Injectable } from '@angular/core';
import { Accommodation } from '../accommodation/accommodation.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditAccommodationService {

    constructor(private http: Http)
    {
       
    }

    edit(accommodation: Accommodation){
       
        
        let header = new Headers();
        header.append('Accept', 'application/json');
       
          header.append('Content-Type', 'application/json');

        let options = new RequestOptions();
        options.headers = header;
        
        let host ="localhost:54042";
        let urlAddress = `http://${host}/api/Accommodations/${accommodation.Id}`;
        return this.http.put(urlAddress, JSON.stringify(accommodation), options);
    }

    getById(id: number) : Observable<any> {
       let host ="localhost:54042";
       return this.http.get(`http://${host}/api/Accommodations/${id}`);
    }
}