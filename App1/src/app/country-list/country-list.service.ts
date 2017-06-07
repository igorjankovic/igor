import {Injectable} from '@angular/core';
import {Country} from '../contry/contry.model'
import {Http,Response,Headers,Request} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CountryListService{

private countries : Country[]

constructor(private http:Http) {
    this.countries=[];

}

getAll():Observable<any>{
    return this.http.get("http://localhost:54042/api/countries");

}

getById(id : number)
{
    return this.http.get(`http://localhost:54042/api/countries`);
}
create(coun:Country): Observable<any>{
    let header = new Headers();
    header.append('Content-Type','application/json');

    let options = new RequestOptions();
    options.headers = header;

     return this.http.post(`http://locahost:54042/api/countries`,header,options);

}
update(){

}

}