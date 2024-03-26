import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, HeaderComponent, FooterComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, MatButton, MatToolbar],
  template: `
    <mat-sidenav-container fullscreen>
      <mat-sidenav mode="side" #sidenav class="container">
        <div class="navigation-bar-container">
          <app-navigation-bar></app-navigation-bar>
        </div>
      </mat-sidenav>
      <mat-sidenav-content >
        <mat-toolbar color="primary">
          <div class="header-container">
            <app-header [title]="title"></app-header>
          </div>
        </mat-toolbar>

        <div class="center-container container">
          <div class="content-container">
            <p><button mat-button (click)="sidenav.toggle()">Menu</button></p>
            <router-outlet/>
          </div>
        </div>
        <div class="footer-container container">
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
