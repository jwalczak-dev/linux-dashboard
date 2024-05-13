import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [],
  template: `
    <p>network works!</p>
  `,
  styleUrl: './network.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetworkComponent {

}
