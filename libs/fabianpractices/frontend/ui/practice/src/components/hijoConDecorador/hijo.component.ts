import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoComponent {}


