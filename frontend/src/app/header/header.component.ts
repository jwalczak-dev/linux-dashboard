import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <div class="header-container">
      <button mat-button (click)="toggle()">Menu</button>
      <h1>{{ title() }}</h1>
    </div>
  `,
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  title = input<string>('');

  @Output() menuButtonClick = new EventEmitter()

  toggle() {
    this.menuButtonClick.emit();
  }


}
