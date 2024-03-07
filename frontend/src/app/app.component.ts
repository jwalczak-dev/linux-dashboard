import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, HeaderComponent],
  template: `
    <app-header [title]="title"></app-header>
    <app-navigation-bar></app-navigation-bar>
    <router-outlet/>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Linux Dashboard';
}
