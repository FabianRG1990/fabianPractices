import { ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-hijo-output-signal',
  templateUrl: './hijoOutputSignal.component.html',
  styleUrl: './hijoOutputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HijoOutputSignalComponent {
mensajeHijo = output<string>();

emitirMensaje() {
  this.mensajeHijo.emit('mensaje desde el hijo');
}

}

