import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hijo-o',
  templateUrl: './hijoOutput.component.html',
  styleUrl: './hijoOutput.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoOComponent {
  @Output() mensajeHijo: EventEmitter<string> = new EventEmitter<string>();  //* Definimos el evento de salida

  emitirMensaje(){
    this.mensajeHijo.emit('mensaje desde el hijo!');  //* Emitimos el evento con un mensaje
  }
}


