import { HijoOutputSignalComponent } from './../hijoOutputSignal/hijoOutputSignal.component';
import { ChangeDetectionStrategy, Component, computed, output, } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-padre-output-signal',
  templateUrl: './padreOutputSignal.component.html',
  styleUrl: './padreOutputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HijoOutputSignalComponent]
})
export class PadreOutputSignalComponent {
  // mensajeRecibido = output<string>();  //* Creamos una señal para guardar el mensaje

  mensajeRecibido: string = ''; //* Propiedad para guardar el mensaje recibido

  recibirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje; //* guarda msj recibido
}
}

