import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [],
  template: `
    <p>{{componentHeader()}}</p>
  `,
  styleUrl: './system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemComponent {
  componentHeader = signal('System information')

}
