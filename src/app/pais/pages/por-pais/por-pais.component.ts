import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];

  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;//variable de control para mostrar o no las sugerencias


  constructor( private paisService: PaisService) { }//inyectamos el servicio en el constructor para poder usarlo

  buscar( termino: string ){//recibo el término de busqueda de tipo string
    
    this.mostrarSugerencias = false;
    this.hayError = false;//mediante el ngIf NO muestra el mensaje de error
    this.termino  = termino;//this.termino es igual al termino que recibo como parametro
    
    this.paisService.buscarPais( termino )//para que un Obbservable se dispare debo tener por lo menos un subscribe / podemos usar this.termino o el termino que recibimos como parametro indistintamente
      .subscribe( (paises) => {//cambiamos el "resp" por "paises" ya que ahora que es de tipado Country[], tiene más sentido
        console.log(paises);

        this.paises = paises;//asignamos los resultados recibidos del subscribe en nuestra variable paises de este componente

      }, (err) => { //cuando no encuentre el termino buscado (error 404), mostrará lo siguiente:
        this.hayError = true;//mediante el ngIf muestra el mensaje de error
        this.paises   = [];//Purga el array volviendolo a 0, eso nos permite implementar el ngIf= "paises.length > 0" en el html, de modo que la tabla no se mostrará si no hay resultados válidos
      })
  }

  sugerencias ( termino: string ) {
    this.hayError = false;
    this.termino = termino;//asignamos el termino recibido en nuestra variable this.termino
    this.mostrarSugerencias = true;//cuando se haga funcionar este método se mostraran las sugerencias
    
    this.paisService.buscarPais( termino )//aplicamos el método buscarPais() del servicio paisService
      .subscribe( 
        paises=> this.paisesSugeridos = paises.splice(0,5),//.splice muestra solo los 5 primeros paise que coinciden con la búsqueda
        (err) => this.paisesSugeridos = [] //Si no hay ningun pais con la búsqueda, vaciamos el array
      );
  }

  buscarSugerido( termino: string ){
    this.buscar( termino ); //aplicamos el método buscar pasandole el termino recibido en el método buscarSugerido()
  }

}
