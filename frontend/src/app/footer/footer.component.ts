import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <p>{{ title() }} | <a href="https://100commitow.pl" target="_blank">100commitow.pl</a></p>
  `,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  title = input<string>('');
}
