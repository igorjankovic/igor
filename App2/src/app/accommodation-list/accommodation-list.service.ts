import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccommodationListService {

   
    constructor(private http: Http)
    {
       
    }

    getAll() : Observable<any> {
        let host = "localhost:54042";
        return this.http.get(`http://${host}/api/Accommodations`);
    }

   

    getByAccTypeId(id: number): Observable<any> {
         let host = "localhost:54042";
        let urlAddress = `http://${host}/api/Accommodations/`+ id;
        return this.http.get(urlAddress);
    }



}