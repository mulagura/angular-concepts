import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.css']
})
export class ViewSpeechComponent implements OnInit {

  constructor(private _appService: AppService) { }

  public speech_repo;
  enableCard = false;
  speechCard = {
    speech_content: null,
    speech_author: null,
    speech_keyword: null,
    speech_date: null
  };
  selectedSpeech;

  ngOnInit(): void {

    this._appService.getSpeechData()
      .subscribe(
        (data) => {
          console.log('speech data', data);
          this.speech_repo = data;

        },
        (err) => {
          console.log('err status', err.status);

        }
      )


  }

  //showSpeech
  showSpeech(speech) {
    console.log(speech);
    this.selectedSpeech = speech;
    if (speech) {
      this.enableCard = true;

      for (let key in speech) {

        this.speechCard.speech_content = speech.speech_content
        this.speechCard.speech_author = speech.speech_author
        this.speechCard.speech_keyword = speech.speech_keyword
        this.speechCard.speech_date = speech.speech_date

      }
    }

  }

  //deleteSpeech
  deleteSpeech() {
    console.log(this.selectedSpeech);
    if (this.selectedSpeech) {
      
      this._appService.openSnackBar(`deleteing by id ${this.selectedSpeech.speech_id}`, 'success-snack');
      this._appService.deleteSpeechByID(this.selectedSpeech.speech_id)
        .subscribe(
          (res) => {
            console.log(res);

          },
          (err) => {
            console.log(err.status);

          }
        )

      this.enableCard = false;
    }

  }

}
