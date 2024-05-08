import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
      <ul class="navigation-list">
        @for (tab of tabs; track $index) {
          <li routerLink="/{{tab.toLowerCase()}}" class="navigation-element" (click)="onNavItemClick()">{{tab}}</li>
        }
      </ul>
  `,
  styleUrl: './navigation-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {
  tabs: string[] = ['System', 'Disk', 'Network', 'Logs', 'About'];

  @Input() closeSidenavFunc!: Function;

  onNavItemClick(): void {
    this.closeSidenavFunc();
  }
}
