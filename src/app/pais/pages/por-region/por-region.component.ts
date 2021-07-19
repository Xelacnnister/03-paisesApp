import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones    : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']; //trabajamos con los elementos de la array en lowercase
  regionActiva: string = '';
  paises      : Country[] = [];

  constructor( private paisService: PaisService) { }//Inyectamos el servicio en el constructor para poder hacer uso de él

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) //usamos un ternario que hace lo siguiente: Si la región es igual a la region activa,
              ? 'btn btn-primary mr-5' //entonces(?) aplicalas clases ('btn btn-primary mr-5'),
              : 'btn btn-outline-primary mr-5'; //else (:) aplica las clases ('btn btn-outline-primary mr-5')
  }   

  activarRegion( region: string){

    if( region === this.regionActiva ) { return; } //evita que vuelva a cargar los paises de nuevo cuando se selecciona la region que ya está activa
    this.regionActiva = region;
    this.paises = []; //vaciamos el array de paises para mejorarel tiempo de respuesta

    //TODO: hacer el llamado al servicio
    this.paisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises);// Asigna la información recibida de la API a nuestra variable local this.paises
  }

}
