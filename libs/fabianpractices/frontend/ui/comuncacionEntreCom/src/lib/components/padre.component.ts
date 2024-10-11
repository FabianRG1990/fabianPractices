import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [PadreComponent],
  exports: [PadreComponent],
})
export class PadreComponentModule {}
