import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias/provincias.service';
import { NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css',
  imports: [
    NgIf, 
    NgFor, 
    MatListModule, 
    MatButtonModule,
    RouterModule
  ],
})
export class ProvinciasComponent implements OnInit {
  provincias: any[] = [];
  error: string | null = null;


  constructor( private provinciasService: ProvinciasService) {}

  ngOnInit(): void {
    this.provinciasService.getProvincias()
      .subscribe(
        (data: any) => this.provincias = data,
        (error: any) => this.error = error
      );
  }
}
