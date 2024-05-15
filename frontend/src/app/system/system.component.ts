import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [],
  template: `
    <p>system works!</p>
  `,
  styleUrl: './system.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemComponent {

}
