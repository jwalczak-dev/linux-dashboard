import {Component, OnInit, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {LoadingComponent} from "./loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, HeaderComponent, FooterComponent, MatSidenavContainer, MatSidenavContent, MatSidenav, MatButton, MatToolbar, LoadingComponent],
  template: `
    <mat-sidenav-container fullscreen>
      <mat-sidenav mode="side" #sidenav class="container">
        <div class="navigation-bar-container">
          <app-navigation-bar [closeSidenavFunc]="closeSidenavFunc"></app-navigation-bar>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="page-container">
          <mat-toolbar color="primary">
              <app-header [title]="title" (menuButtonClick)="sidenavToggle()"></app-header>
          </mat-toolbar>
          <div class="center-container container">
            <div class="content-container">
              <router-outlet/>
            </div>
          </div>
          <div class="footer-container container">
            <app-footer [title]="title"></app-footer>
          </div>
          @if (showLoader()) {
            <app-loading></app-loading>
          }
        </div>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Linux Dashboard';
  showLoader = signal(true);

  get closeSidenavFunc() {
    return this.closeSidenav.bind(this);
  }

  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit(): void {
    setInterval(() => {
      this.showLoader.update(() => false)
    }, 1500)
  }

  sidenavToggle(): void {
    this.sidenav.toggle();
  }

  closeSidenav(): void {
    this.sidenav.close();
  }
}
