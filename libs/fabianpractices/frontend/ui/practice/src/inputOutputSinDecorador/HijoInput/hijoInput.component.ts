import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hjo-input',
  templateUrl: './hijoInput.component.html',
  styleUrl: './hijoInput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HjoInputComponent {}
