import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-hijo-o',
  templateUrl: './hijoOuput.component.html',
  styleUrl: './hijoOuput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoOComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [HijoOComponent],
  exports: [HijoOComponent],
})
export class HijoOComponentModule {}
