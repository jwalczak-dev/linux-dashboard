import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <h2>Linux Dashboard</h2>
    <p>About project:</p>
    <p>An application used to monitor the performance of the Linux operating system via a web browser.</p>
  `,
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  
}
