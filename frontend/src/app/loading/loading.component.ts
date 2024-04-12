import { Component } from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  template: `
    <mat-spinner></mat-spinner>
  `,
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

}
