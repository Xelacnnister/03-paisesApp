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

  activarRegion( region: string){
    this.regionActiva = region;

    //TODO: hacer el llamado al servicio
  }

}
