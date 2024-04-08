import { Routes } from '@angular/router';
import {SystemComponent} from "./system/system.component";
import {DiskComponent} from "./disk/disk.component";
import {NetworkComponent} from "./network/network.component";
import {LogsComponent} from "./logs/logs.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {path: 'system', component: SystemComponent},
  {path: 'disk', component: DiskComponent},
  {path: 'network', component: NetworkComponent},
  {path: 'logs', component: LogsComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: SystemComponent}
];
