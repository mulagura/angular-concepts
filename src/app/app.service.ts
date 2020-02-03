import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// snackbar
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from './snackbar-as-a-service/snackbar-as-a-service.component';

// interface
import { Posts, UserDetails } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  // by default, we can expect json response, no need of res.json()
  // { observe: 'response' } get headers, URL, status and body
  // this.http.get<Posts>(this.GET_USER_URL, { observe: 'response' } )
  // progress events,: can able to listen the progress of your call
  // We first need to build a request object by creating an instance of the HttpRequest class 
     //and using the reportProgress option
  // INterceptors

  // get all posts
  readonly GET_USER_URL: string = "https://jsonplaceholder.typicode.com/posts";

  // get by one post
  readonly GET_USER_URL_1: string = "https://jsonplaceholder.typicode.com/posts/1";


  // get posts data
  getPosts(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.GET_USER_URL)
      // .subscribe(

      //   (res) => {
      //     // console.log( res.headers.get('X-Powered-By') );

      //     console.log(res);
      //   },

      //   (err: HttpErrorResponse) => {
      //     console.log(err.error);
      //     console.log(err.name);
      //     console.log(err.message);
      //     console.log(err.status);
      //   }

      // );


  }

  // get posts data 1 and using progress events
  getPosts1() {

    const getPost1 = new HttpRequest('GET', this.GET_USER_URL_1, { reportProgress: true });

    this.http.request(getPost1)
      .subscribe(
        (event: HttpEvent<Posts>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request sent!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header received!');
              break;
            case HttpEventType.DownloadProgress:
              const kbLoaded = Math.round(event.loaded / 1024);
              console.log(`Download in progress! ${kbLoaded}Kb loaded`, `in bytes ${event.loaded}`);
              break;
            case HttpEventType.Response:
              console.log(  '😃 Done!', event.body);
          }
        }
      )



  }

  // post posts data
  postPosts() {
    this.http.post<Posts>(this.GET_USER_URL, { userId: 10, id: 10, title: 'venkat', body: 'my body' })
      .subscribe(

        (res) => {
          // console.log( res.headers.get('X-Powered-By') );

          console.log(res);
        },

        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        }

      );


  }

  //get table data from json
  getTableData(){
    return this.http.get(`http://localhost:4200/assets/tableData.json`);
  }


  //snack bar method; duration in milliseconds,data is message to display, panelClass is css class from ts
  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      panelClass: panelClass,
      duration: 2000
    });
  }

}
