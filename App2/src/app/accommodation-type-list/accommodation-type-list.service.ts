import {Injectable} from '@angular/core';
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {Http,Response, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class AccommodationTypeListService{
 
  constructor(private http:Http){

  }

 getAll():Observable<any>{
     let header = new Headers();
     header.append('Content-Type','application/json');
     let options = new RequestOptions();
     options.headers = header;

     return this.http.get("hhtp://localhost:54042/api/AccommodationTypes",options);

 }
 delete(id){
     let token = localStorage.getItem("token");
     let header = new Headers();
     header.append('Content-Type','application/json');
     
    let options = new RequestOptions();
    options.headers = header;

    let urlAddress = "hhtp://localhost:54042/api/AccommodationTypes";
    return this.http.delete(urlAddress,options);

 }

}