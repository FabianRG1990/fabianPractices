import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-padre-input',
  templateUrl: './padreInput.component.html',
  styleUrl: './padreInput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreInputComponent {}

