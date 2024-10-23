import { PadreInputSignalComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/inputSignal/padreInputSignal/padreInputSignal.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PadreComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/decoradorInput/padreConDecorador/padre.component';
import { PadreOComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/decoradorOutput/padreOutputDecorador/padreOutput.component';

@Component({
  standalone: true,
  imports: [RouterModule, PadreComponent, PadreOComponent,PadreInputSignalComponent ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'org';
}
