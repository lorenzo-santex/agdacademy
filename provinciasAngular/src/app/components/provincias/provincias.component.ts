import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias/provincias.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css',
  imports: [NgIf, NgFor],
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
