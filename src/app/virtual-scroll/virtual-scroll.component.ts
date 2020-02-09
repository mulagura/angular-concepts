
// https://material.angular.io/cdk/scrolling/overview
// https://www.tutorialspoint.com/angular7/angular7_materials_cdk_virtual_scrolling.htm
// https://medium.com/front-end-weekly/how-to-use-virtual-scrolling-using-angular-7-cdk-9802110111fa
// https://netbasal.com/a-taste-of-angular-material-virtual-scroll-f173c5c70a1



import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {

  thumbnails = [];

  constructor(private _appService: AppService) { }

  ngOnInit(): void {

    this._appService.getThumbnails()
      .subscribe(
        (data) => {
          console.log('virtual', data); // 5k pics
          this.thumbnails = Array.from(Object.keys(data), t => data[t]);
          console.log('virtual 2', this.thumbnails); // 5k pics
        },
        (err) => {
          console.log(err.status);

        }
      )
  }



}
