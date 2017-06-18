import { Injectable } from '@angular/core';
import { AccommodationType } from '../accommodation-type/accommodation-type.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http'


@Injectable()
export class AccommodationTypeService {

    constructor(private http: Http)
    {
       
    }

    getAccommodationType(id: number): Observable<any> {
        let host = "localhost:54042";
        let urlAddress = `http://${host}/api/AccommodationTypes ` + id;

        return this.http.get(urlAddress);

        


    }

    delete(id: number) {
        let header = new Headers();
        header.append('Content-Type', 'application/json');

        let options = new RequestOptions();
        options.headers = header;
        
        let host ="localhost:54042";
        let urlAddress = `http://${host}/api/AccommodationTypes/` + id;
        return this.http.delete(urlAddress, options);
    }

}