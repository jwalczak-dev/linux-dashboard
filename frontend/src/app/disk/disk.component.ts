import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-disk',
  standalone: true,
  imports: [],
  template: `
    <h2>{{componentHeader()}}</h2>
    <p>Disk partitions</p>
<!--    - number of partitions-->
<!--    - total space-->
<!--    - free space-->
  `,
  styleUrl: './disk.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiskComponent {
  componentHeader = signal('Disk information')

}
