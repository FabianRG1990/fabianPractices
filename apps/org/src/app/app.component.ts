import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PadreComponent } from 'libs/fabianpractices/frontend/ui/practice/src/components/padreConDecorador/padre.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, PadreComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'org';
}
