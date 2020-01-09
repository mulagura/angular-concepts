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
    let data = [{cid:'s123',infy:'infosys',is:'wipro'},{cid:'s124',infy:'infosys2',is:'wipro2'}];
    let toxl:string;

    for(let i=0;i<data.length;i++){
      
    }





  }


//snack bar success; (message,css panel class)  
  openSnackBar() {
    console.log('snack bar !!!!');
    this.appService.openSnackBar('Data Posted Successfully !!! ', 'success-snack');

  }



}
