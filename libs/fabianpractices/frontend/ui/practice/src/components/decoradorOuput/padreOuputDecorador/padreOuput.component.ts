import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-padre-o',
  templateUrl: './padreOuput.component.html',
  styleUrl: './padreOuput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreOComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [PadreOComponent],
  exports: [PadreOComponent],
})
export class PadreOComponentModule {}
