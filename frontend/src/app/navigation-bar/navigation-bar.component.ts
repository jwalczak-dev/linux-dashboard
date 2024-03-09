import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <div class="navigation-bar-container">
      <ul>
        <li *ngFor="let tab of tabs" routerLink="/{{tab}}">{{tab}}</li>
      </ul>
    </div>
  `,
  styleUrl: './navigation-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {
  tabs: string[] = ['System', 'Network', 'Logs'];

}
