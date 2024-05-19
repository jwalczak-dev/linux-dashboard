import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-disk',
  standalone: true,
  imports: [],
  template: `
    <p>{{componentHeader()}}</p>
  `,
  styleUrl: './disk.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiskComponent {
  componentHeader = signal('Disk information')

}
