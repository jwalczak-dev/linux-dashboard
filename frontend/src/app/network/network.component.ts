import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [],
  template: `
    <p>{{componentHeader()}}</p>
    <p>Network interfaces</p>
<!--    - list all interfaces-->
<!--    - show download/upload -->
  `,
  styleUrl: './network.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkComponent {
  componentHeader = signal('Network information')
}
