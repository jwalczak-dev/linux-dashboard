import {ChangeDetectionStrategy, Component, EventEmitter, input, Output} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule, MatIcon
  ],
  template: `
    <div class="header-container">
      <button mat-button (click)="toggle()" class="menu-button"><mat-icon class="menu-button-icon">menu</mat-icon></button>
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
