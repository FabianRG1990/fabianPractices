import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hijo-output',
  templateUrl: './hijoOutput.component.html',
  styleUrl: './hijoOutput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoOutputComponent {}

