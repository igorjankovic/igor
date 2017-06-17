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

    getAllOData() : Observable<any> {
         let host = "localhost:54042";
        return this.http.get(`http://${host}/odata/AccOData`);
    }

    getByAccTypeId(id: number): Observable<any> {
         let host = "localhost:54042";
        let urlAddress = `http://${host}/odata/AccOData`+ id;
        return this.http.get(urlAddress);
    }



}