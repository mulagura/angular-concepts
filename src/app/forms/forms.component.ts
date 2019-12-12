import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'tdf-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  public courses:Array<string> = ['Maths','Physics','Chemistry'];
  public slots:Array<string> = ['Morning(9-11 AM)','Noon(2-4 PM)','Evening(5-7 PM'];

  userdata = new User('venkat','xyz@g.com',123,'madiwala','bangalore',517501,true,true);

  ngOnInit() {

    //  TDF 
    // -> Template driven form is suitable for simple forms and not unit Testable, should be test in browser,
    //      -> Mostly relies on HTML and ngModel

// ngModel
// for fields, name is mandatory, with ngModel attribute to each filed, can track the value
// ngModelGroup -> to group like object; eg. address:city , street, pin
// three directives for tdf --> ngForm,ngModel,ngModelGroup
// binding data to model -> use class and create instance; use ngModel to assign
// class vs instance -> interface used only for type chacking; whereas class is used both for type checking and new instance creation

  }

  submitRegForm(formData){
    console.log('click works');
    console.log(formData.value.username); 
  }

}
