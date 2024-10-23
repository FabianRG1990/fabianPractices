import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-padre-input-signal',
  templateUrl: './padreInputSignal.component.html',
  styleUrl: './padreInputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreInputSignalComponent {}
