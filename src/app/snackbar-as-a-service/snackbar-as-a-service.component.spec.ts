import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarAsAServiceComponent } from './snackbar-as-a-service.component';

describe('SnackbarAsAServiceComponent', () => {
  let component: SnackbarAsAServiceComponent;
  let fixture: ComponentFixture<SnackbarAsAServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarAsAServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarAsAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
