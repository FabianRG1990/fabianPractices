import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoComponent{
  @Input() mensaje: string = '';  // Declaramos la propiedad con @Input

}


