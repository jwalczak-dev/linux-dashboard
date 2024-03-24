import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, HeaderComponent, FooterComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, MatButton],
  template: `
    <mat-sidenav-container fullscreen>
      <mat-sidenav mode="side" #sidenav>
        <div class="navigation-bar-container">
          <app-navigation-bar></app-navigation-bar>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="header-container">
          <app-header [title]="title"></app-header>
        </div>
        <div class="center-container">
          <div class="content-container">
            <p><button mat-button (click)="sidenav.toggle()">Menu</button></p>
            <router-outlet/>
          </div>
        </div>
        <div class="footer-container">
          <app-footer [title]="title"></app-footer>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Linux Dashboard';
}
