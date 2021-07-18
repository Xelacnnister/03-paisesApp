import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute, //implementamos el private activatedRoute de @angular/router. / Viene con lo necesario para poder suscribirnos a cualquier cambio en la url
    private paisService: PaisService //Inyectamos el servicio para poder usarlo, concretamente el método getPaisPorAlpha()
    ) { }

  ngOnInit(): void { 

    this.activatedRoute.params //convierte en un Observable la ruta activa como parametro. / En la consola pararece como id: por haberlo indicado así en el routing.module (/:id)
      .subscribe( ({id}) => { // desestructuramos el param para extraer directamente el id ({id})
        console.log( id );// Antes de desestructurar el params en el subscribe( params -> ({id}) ), usariamos params.id
        
        this.paisService.getPaisPorAlpha( id ) //Creamos otro Observable para opteener la información del país./ creamos el método getPaisPorAlpha() en el pais.service.ts
        .subscribe( pais => { //nos suscribimos al id para tener esa información
          console.log( pais );
        })
      })

  }

}
