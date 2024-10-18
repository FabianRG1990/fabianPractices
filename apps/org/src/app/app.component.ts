import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PadreComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/padreConDecorador/padre.component';
import { HijoComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/hijoConDecorador/hijo.component';

@Component({
  standalone: true,
  imports: [RouterModule, PadreComponent, HijoComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'org';
}
