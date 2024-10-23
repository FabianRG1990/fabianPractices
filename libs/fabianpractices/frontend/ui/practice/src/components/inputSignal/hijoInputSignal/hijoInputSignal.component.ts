import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hijo-input-signal',
  templateUrl: './hijoInputSignal.component.html',
  styleUrl: './hijoInputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoInputSignalComponent {}
