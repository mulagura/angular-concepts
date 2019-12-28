import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public minDate = new Date(); // update later
  public maxDate = new Date(); // empty -> take present

  constructor(private appService: AppService) { }


  ngOnInit() {

    var toSet = this.minDate.setFullYear(this.minDate.getFullYear() - 18, this.minDate.getMonth(), this.minDate.getDate());
    var toSetDate = new Date(toSet);
    this.minDate = toSetDate;



  }


//snack bar success; (message,css panel class)  
  openSnackBar() {
    console.log('snack bar !!!!');
    this.appService.openSnackBar('Data Posted Successfully !!! ', 'success-snack');

  }

}
