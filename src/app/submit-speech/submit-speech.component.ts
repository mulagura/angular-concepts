import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'submit-speech',
  templateUrl: './submit-speech.component.html',
  styleUrls: ['./submit-speech.component.css']
})
export class SubmitSpeechComponent implements OnInit {

  constructor(private fb: FormBuilder, private _appService:AppService) { }

  myForm: FormGroup;

  ngOnInit(): void {

    this.myForm = this.fb.group({
      content: ['', Validators.required],
      author: ['', Validators.required],
      keyword: ['', Validators.required],
      date: ['', Validators.required]
    });


  }

  onSubmit(speech) {
    console.log(speech.valid);
    console.log(speech.value.content);
    console.log(speech.value.author);
    console.log(speech.value.keyword);
    console.log(speech.value.date);
    let speechObj = {
      content:speech.value.content,
      author:speech.value.author,
      keyword:speech.value.keyword,
      date:speech.value.date
    }
    if(speech.valid){

      this._appService.saveSpeechData(speechObj)
        .subscribe(
          (res)=>{
            // console.log(res);
            // speech.reset();
            
          },
          (err)=>{
            console.log(err);
            this._appService.openSnackBar(`saving ${speechObj.keyword}`, 'success-snack');
            speech.reset();
            
          }
        )

    }


  }

}
