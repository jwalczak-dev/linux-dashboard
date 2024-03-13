import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, HeaderComponent, FooterComponent],
  template: `
    <div class="header-container">
      <app-header [title]="title"></app-header>
    </div>
    <div class="center-container">
      <div class="navigation-bar-container">
        <app-navigation-bar></app-navigation-bar>
      </div>
      <div class="content-container">
        <router-outlet/>
      </div>
    </div>
    <div class="footer-container">
      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Linux Dashboard';
}
