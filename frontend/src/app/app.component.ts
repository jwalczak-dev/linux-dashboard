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
    <app-header [title]="title"></app-header>
    <app-navigation-bar></app-navigation-bar>
    <router-outlet/>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Linux Dashboard';
}
