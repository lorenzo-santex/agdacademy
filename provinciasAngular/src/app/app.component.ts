import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProvinciasComponent, MatSlideToggleModule, MatListModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'provinciasAngular';
}
