import {Component} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="navigation-bar-container">
      <ul>
        <li *ngFor="let tab of tabs">{{tab}}</li>
      </ul>
    </div>
  `,
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  tabs: string[] = ['System', 'Network', 'Logs'];

}
