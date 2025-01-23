import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinciasComponent } from './components/provincias/provincias.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProvinciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'provinciasAngular';
}
