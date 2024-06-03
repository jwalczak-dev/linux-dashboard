import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [],
  template: `
    <p>{{componentHeader()}}</p>
    <p>Log data</p>
  `,
  styleUrl: './logs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsComponent {
  componentHeader = signal('Logs information')

}
