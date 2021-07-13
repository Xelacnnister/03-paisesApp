import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();//@Output hace la emisión. Creamos el evento onEnter. Lo teipamos como EventEmitter y asignamos a new EventEmitter()
                                                                //Especificamos el tipo de evento <string> en Base al tipo de this.termino
  termino: string = '';


  buscar(){//cuando se presiona enter en el input se activa el método
    this.onEnter.emit( this.termino );// emite el this.termino
  }

}
