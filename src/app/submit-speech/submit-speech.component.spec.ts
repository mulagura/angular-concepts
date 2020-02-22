import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSpeechComponent } from './submit-speech.component';

describe('SubmitSpeechComponent', () => {
  let component: SubmitSpeechComponent;
  let fixture: ComponentFixture<SubmitSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
