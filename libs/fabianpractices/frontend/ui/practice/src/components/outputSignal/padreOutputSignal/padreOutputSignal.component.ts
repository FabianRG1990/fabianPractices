import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-padre-output-signal',
  templateUrl: './padreOutputSignal.component.html',
  styleUrl: './padreOutputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreOutputSignalComponent {}

