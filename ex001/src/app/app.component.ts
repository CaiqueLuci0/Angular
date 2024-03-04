import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroModulo } from './primeiroModulo/primeiroModulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroModulo],
  template: `<primeiroModulo></primeiroModulo>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex001';
}
