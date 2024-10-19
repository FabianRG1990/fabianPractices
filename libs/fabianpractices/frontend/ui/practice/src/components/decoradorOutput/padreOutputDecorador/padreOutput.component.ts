import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-padre-o',
  templateUrl: './padreOutput.component.html',
  styleUrl: './padreOutput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadreOComponent {}


