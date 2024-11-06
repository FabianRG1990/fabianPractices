import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MensajeService } from '../services/title/mjs.service';

@Component({
  standalone: true,
  selector: 'lib-msj',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MsjComponent {

  private mensajeService = inject(MensajeService);

  mensaje: string;

  constructor() {
    this.mensaje = this.mensajeService.obtenerMensaje();
  }
}


