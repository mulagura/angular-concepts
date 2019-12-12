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

    this.appService.getUsers()
      .subscribe(
        (data) => {
          console.log('data --->', data);
          (error) => {
            console.log('error is--->', error);
          }
        });

  }

}
