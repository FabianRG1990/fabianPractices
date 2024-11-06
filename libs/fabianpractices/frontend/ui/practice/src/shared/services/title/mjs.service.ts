import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  constructor() {}

  obtenerMensaje(): string {
    return 'mensaje del servidor';
  }
}
