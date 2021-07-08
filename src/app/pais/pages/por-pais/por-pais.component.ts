import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';

  constructor( private paisService: PaisService) { }//inyectamos el servicio en el constructor para poder usarlo

  buscar(){//postea el término buscado
    console.log(this.termino);
    
    this.paisService.buscarPais( this.termino )//para que un Obbservable se dispare debo tener por lo menos un subscribe
      .subscribe( resp => {
        console.log(resp);
        
      })
  }

}
