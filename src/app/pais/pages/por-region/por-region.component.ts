import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']; //trabajamos con los elementos de la array en lowercase
  regionActiva: string = '';

  constructor() { }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) //usamos un ternario que hace lo siguiente: Si la región es igual a la region activa,
              ? 'btn btn-primary mr-5' //entonces(?) aplicalas clases ('btn btn-primary mr-5'),
              : 'btn btn-outline-primary mr-5'; //else (:) aplica las clases ('btn btn-outline-primary mr-5')
  }   

  activarRegion( region: string){
    this.regionActiva = region;

    //TODO: hacer el llamado al servicio
  }

}
