import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar-as-a-service.component.html'
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }



  // Created Snackbar as a service, which is injectable in all components (service is injected in all most components).

  // https://stackblitz.com/edit/angular-material-snackbar-from-component?file=src%2Fapp%2Fapp.module.ts

}