import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijoConDecorador/hijo.component';

@Component({
  standalone: true,
  selector: 'lib-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports:  [FormsModule, HijoComponent],
})
export class PadreComponent {

  mensajePadre: string = '';  // Esta propiedad está enlazada con el input

}


