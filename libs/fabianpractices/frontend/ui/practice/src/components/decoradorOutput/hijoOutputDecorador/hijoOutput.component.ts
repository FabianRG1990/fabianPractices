import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-hijo-o',
  templateUrl: './hijoOutput.component.html',
  styleUrl: './hijoOutput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoOComponent {}


