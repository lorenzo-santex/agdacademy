import { Component } from '@angular/core';
import { ProvinciasService } from '../../services/provincias/provincias.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  imports: [
    NgIf, 
    NgFor, 
    MatListModule, 
    MatButtonModule,
    RouterModule,
    JsonPipe
    
  ],
  templateUrl: './ciudades.component.html',
  styleUrl: './ciudades.component.css'
})
export class CiudadesComponent {
  provinciaCode: string = '';
  ciudades: any[] = [];
  error: string | null = null;
  datos: any = [];

  constructor( 
    private provinciasService: ProvinciasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.datos = this.router.url;
    this.provinciaCode = this.datos.split('/')[2];

    this.provinciasService.getCiudades(this.provinciaCode)
      .subscribe(
        (data: any) => this.ciudades = data,
        (error: any) => this.error = error
      );
  }

}
