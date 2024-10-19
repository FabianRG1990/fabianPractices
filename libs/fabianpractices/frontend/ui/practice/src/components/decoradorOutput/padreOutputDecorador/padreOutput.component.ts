import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HijoOComponent } from '../hijoOutputDecorador/hijoOutput.component';

@Component({
  standalone: true,
  selector: 'lib-padre-o',
  templateUrl: './padreOutput.component.html',
  styleUrl: './padreOutput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HijoOComponent], //* Importar el hijo
})
export class PadreOComponent {

  mensajeRecibido: string = ''; //* Propiedad para guardar el mensaje recibido

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje; //* guarda msj recibido
  }
}


