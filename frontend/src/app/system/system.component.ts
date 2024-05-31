import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [],
  template: `
    <h2>{{componentHeader()}}</h2>
    <p>General info</p>
<!--    - hostname-->
<!--    - os-->
<!--    - uptime-->
<!--    - time-->

    <p>Memory info</p>
<!--    - total memory-->
<!--    - RAM-->
<!--    - Swap-->
<!--    - memory usage-->

    <p>CPU info</p>
<!--    - name-->
<!--    - version-->
<!--    - number of cores-->
<!--    - usage-->
  `,
  styleUrl: './system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemComponent {
  componentHeader = signal('System information')

}
