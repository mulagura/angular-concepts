import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// snackbar
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from './snackbar-as-a-service/snackbar-as-a-service.component';

// interface
import { Posts } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  // get all posts
  readonly GET_USER_URL: string = "https://jsonplaceholder.typicode.com/posts";


  // get users data
  // getUsers(): Observable<Posts> {
  //   return this.http.get(this.GET_USER_URL)
  //     .map((res: Response) => {
  //       console.log(res, typeof res, Array.isArray(res));
  //       return res;
  //     });

  // }

    //snack bar method; duration in milliseconds,data is message to display, panelClass is css class from ts
    openSnackBar(message: string, panelClass: string) {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: message,
        panelClass: panelClass,
        duration: 2000
      });
    }

}
