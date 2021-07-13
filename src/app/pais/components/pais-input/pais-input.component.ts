import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter(); //@Output hace la emisión. Creamos el evento onEnter. Lo teipamos como EventEmitter y asignamos a new EventEmitter() //Especificamos el tipo de evento <string> en Base al tipo de this.termino // onDebounce se ejecuta cuando el usuario deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 

  @Input() placeholder: string = ''; //Recibe el valor de placeholder dese la propiedad del input en los HTML de por-capital y por-pais

  debouncer: Subject<string> = new Subject();// El Subject permite "crear un Observable manualmente";

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe( //transforma la salida del subscribe
      debounceTime(300)// no emitas el .subscribe hasta que este observable deje de emitir valores por las proximas 300 milesimas de segundo
    )
    .subscribe( valor => {//suscribimos a los cambios del debouncer. Se tiene que implementar en el input el evento (input)="teclaPresionada"
      this.onDebounce.emit( valor ); //Emitimos el onDebounce. En vez del valor, tambien pudimos haber pasado el termino
    });
  }


  buscar(){//cuando se presiona enter en el input se activa el método
    this.onEnter.emit( this.termino );// emite el this.termino
  }

  teclaPresionada (  ) { //(event: any)
    // const valor = event.target.value;          Si usamos el ($event) en el input del HTML
    // console.log(valor);
    
    // console.log(this.termino);

    this.debouncer.next( this.termino ); //Cada vez que usuario presiona una tecla, llama al .next(this.termino). El .next está suscrito al debouncer. El debouncer va a recibir el nuevo valor y éste se se imprimirá en el .emit
    
  }

}
