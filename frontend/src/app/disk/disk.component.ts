import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-disk',
  standalone: true,
  imports: [],
  template: `
    <p>disk works!</p>
  `,
  styleUrl: './disk.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiskComponent {

}
