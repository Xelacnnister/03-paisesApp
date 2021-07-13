import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
 

  constructor( private paisService: PaisService) { }//inyectamos el servicio en el constructor para poder usarlo

  buscar(){//postea el término buscado
    this.hayError = false;//mediante el ngIf NO muestra el mensaje de error
    console.log(this.termino);
    
    this.paisService.buscarPais( this.termino )//para que un Obbservable se dispare debo tener por lo menos un subscribe
      .subscribe( (paises) => {//cambiamos el "resp" por "paises" ya que ahora que es de tipado Country[], tiene más sentido
        console.log(paises);

        this.paises = paises;

      }, (err) => { //cuando no encuentre el termino buscado (error 404), mostrará lo siguiente:
        this.hayError = true;//mediante el ngIf muestra el mensaje de error
        this.paises   = [];//Purga el array volviendolo a 0, eso nos permite implementar el ngIf= "paises.length > 0" en el html, de modo que la tabla no se mostrará si no hay resultados válidos
      })
  }

}
