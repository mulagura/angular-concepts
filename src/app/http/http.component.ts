import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {

    // get
    this.appService.getPosts()
      .subscribe(

        (data) => {
          console.log('comp data', data);
        },

        (err) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        }

      );
// get 1

    this.appService.getPosts1()
    //     .subscribe(
    //       (data) => {
    //         console.log('data --->', data);
    //         (error) => {
    //           console.log('error is--->', error);
    //         }
    //       });

    //post 1
    this.appService.postPosts()

  }

}
