import {Injectable} from '@angular/core';
import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {Http,Response, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class AccommodationTypeListService{
 
  constructor(private http:Http){

  }

  getAll() : Observable<any> {
        
        let header = new Headers();
        header.append('Content-Type', 'application/json');  
        let options = new RequestOptions();
        options.headers = header;

        let host = "localhost:54042";
        return this.http.get(`http://${host}/api/AccommodationTypes`, options);
    }

     deleteAccommodationType(id: number) {
        let token=localStorage.getItem("token");
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', 'Bearer '+ JSON.parse(token).token);

        let options = new RequestOptions();
        options.headers = header;
        
        let host ="localhost:54042";
        let urlAddress = `http://${host}/api/AccommodationTypes/` + id;
        return this.http.delete(urlAddress, options);
    }


}