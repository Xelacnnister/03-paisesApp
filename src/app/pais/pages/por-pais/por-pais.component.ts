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
  hayError: boolean = false;

  constructor( private paisService: PaisService) { }//inyectamos el servicio en el constructor para poder usarlo

  buscar(){//postea el término buscado
    this.hayError = false;//mediante el ngIf NO muestra el mensaje de error
    console.log(this.termino);
    
    this.paisService.buscarPais( this.termino )//para que un Obbservable se dispare debo tener por lo menos un subscribe
      .subscribe( (resp) => {
        console.log(resp);
      }, (err) => { //cuando no encuentre el termino buscado (error 404), mostrará lo siguiente:
        this.hayError = true;//mediante el ngIf muestra el mensaje de error
        
      })
  }

}
