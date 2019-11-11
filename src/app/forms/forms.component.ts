import { Component, OnInit, TestabilityRegistry } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //  TDF -> Template driven form is suitable for simple forms and not unit Testable, should be test in browser,
    //      -> Mostly relies on HTML and ngModel

  }

}
