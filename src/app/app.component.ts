import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public minDate = new Date(); // update later
  public maxDate = new Date(); // empty -> take present

  ngOnInit() {

    var toSet = this.minDate.setFullYear(this.minDate.getFullYear() - 18, this.minDate.getMonth(), this.minDate.getDate());
    var toSetDate = new Date(toSet);
    this.minDate = toSetDate;

  }

}
