import { PadreOutputSignalComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/outputSignal/padreOutputSignal/padreOutputSignal.component';
import { PadreInputSignalComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/inputSignal/padreInputSignal/padreInputSignal.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PadreComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/decoradorInput/padreConDecorador/padre.component';
import { PadreOComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/decoradorOutput/padreOutputDecorador/padreOutput.component';
import { MsjComponent } from '../../../../libs/fabianpractices/frontend/ui/practice/src/shared/components/service.component';

@Component({
  standalone: true,
  imports: [RouterModule, PadreComponent, PadreOComponent,PadreInputSignalComponent, PadreOutputSignalComponent, MsjComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'org';
}
