import { Injectable } from '@angular/core';
import { Accommodation } from '../accommodation/accommodation.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AccommodationService {

    constructor(private http: Http) {

         
    }

    getById(id: number) : Observable<any> {

        let host ="localhost:54042";
        let urlAddress = `http://${host}/api/Accommodations` + id;
        return this.http.get(urlAddress);
    }

    delete(id) {
       
        let header = new Headers();
        header.append('Content-Type', 'application/json');
       

        let options = new RequestOptions();
        options.headers = header;
        
        let host= "localhost:54042";
        let urlAddress = `http://${host}/api/Accommodations/` + id;
        return this.http.delete(urlAddress, options);
    }
}