import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';

export const routes: Routes = [
    {
        path: '',
        component: ProvinciasComponent,
        title: 'Inicio'
    },
    {
        path: 'provincia',
        redirectTo: '',
        title: 'Inicio'
    },
    {
        path: 'provincia/:code',
        component: CiudadesComponent,
        title: 'Provincia'
    }
];
