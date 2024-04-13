import { Component } from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  template: `
    <div class="loader-overlay">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

}
