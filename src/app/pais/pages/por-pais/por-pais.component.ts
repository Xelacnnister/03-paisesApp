import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';

  constructor() { }

  buscar(){//postea el término buscado
    console.log(this.termino);
    
  }

}
