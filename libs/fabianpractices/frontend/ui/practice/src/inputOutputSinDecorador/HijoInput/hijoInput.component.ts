import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hjo-input',
  templateUrl: './hijoInput.component.html',
  styleUrl: './hijoInput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HjoInputComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [HjoInputComponent],
  exports: [HjoInputComponent],
})
export class HjoInputComponentModule {}
