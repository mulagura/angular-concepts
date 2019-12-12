import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// interface
import { UserDetails } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  readonly GET_USER_URL:string = "https://jsonplaceholder.typicode.com/users";


  // get users data
  getUsers():Observable<UserDetails>{
    return this.http.get(this.GET_USER_URL)
    .map((res:Response)=>{
      console.log(res,typeof res, Array.isArray(res));
      // return res.json();
    });
    
  }

}
