import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [],
  template: `
    <p>logs works!</p>
  `,
  styleUrl: './logs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsComponent {

}
