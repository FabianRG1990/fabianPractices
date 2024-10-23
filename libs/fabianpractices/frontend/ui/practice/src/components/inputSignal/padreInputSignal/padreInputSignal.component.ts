import { HijoInputSignalComponent } from './../hijoInputSignal/hijoInputSignal.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'lib-padre-input-signal',
  templateUrl: './padreInputSignal.component.html',
  styleUrl: './padreInputSignal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, HijoInputSignalComponent],
})
export class PadreInputSignalComponent {
  mensajePadre: string = '';
}
