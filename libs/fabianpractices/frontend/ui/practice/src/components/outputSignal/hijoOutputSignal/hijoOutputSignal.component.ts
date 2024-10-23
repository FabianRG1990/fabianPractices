import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hijo-output-signal',
  templateUrl: './hijoOutputSignal.component.html',
  styleUrl: './hijoOutputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoOutputSignalComponent {}

