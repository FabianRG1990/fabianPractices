import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-padre-output',
  templateUrl: './padreOutput.component.html',
  styleUrl: './padreOutput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreOutputComponent {}

