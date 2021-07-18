import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute, //implementamos el private activatedRoute de @angular/router. / Viene con lo necesario para poder suscribirnos a cualquier cambio en la url
    private paisService: PaisService //Inyectamos el servicio para poder usarlo, concretamente el método getPaisPorAlpha()
    ) { }

  ngOnInit(): void { 

    this.activatedRoute.params //accedemos al Observable que contierne los parámetros
      .pipe(//para usar los operadores de rxjs./ dentro podemos especificar cualquier cantidad de operadores que van a trabajar con el producto del Observable anterior, en este caso: params
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ), //switchMap es uno de los oeradores de transformación, recibe un Observable( ({ id })) y devuelve otro Observable( this.paisService.getPaisPorAlpha( id ) )
        tap( console.log )
        )
        .subscribe( pais => this.pais = pais ); //subscribimos al Observable params
          
      
      

    /* Versión larga con doble .subscribe */ 

    // this.activatedRoute.params //convierte en un Observable la ruta activa como parametro. / En la consola pararece como id: por haberlo indicado así en el routing.module (/:id)
    //   .subscribe( ({id}) => { // desestructuramos el param para extraer directamente el id ({id})
    //     console.log( id );// Antes de desestructurar el params en el subscribe( params -> ({id}) ), usariamos params.id
        
    //     this.paisService.getPaisPorAlpha( id ) //Creamos otro Observable para opteener la información del país./ creamos el método getPaisPorAlpha() en el pais.service.ts
    //     .subscribe( pais => { //nos suscribimos al id para tener esa información
    //       console.log( pais );
    //     })
    //   })

  }

}
