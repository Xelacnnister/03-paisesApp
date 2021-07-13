import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{ //en el .get nos dice que tipo de info va a retornar - Ponemos  que el Observable es de tipo <Country[]> para que sepa que devuelve un array[] de Country

    const url = `${ this.apiUrl }/name/${ termino }`; //Construimos la url con ayuda de las variables ya creadas

    return this.http.get<Country[]>( url ); // se tiene que especificar el tipado Country[], de otra forma el get puede devolver cualquier cosa (any)
  }                                         // podria quitarse el Observable y su tipado en buscarPais() y TS lo entendería, pero es preferible dejarlo así por legibilidad

  buscarCapital( termino: string ): Observable<Country[]>{ //en el .get nos dice que tipo de info va a retornar - Ponemos  que el Observable es de tipo <Country[]> para que sepa que devuelve un array[] de Country

    const url = `${ this.apiUrl }/capital/${ termino }`; //Construimos la url con ayuda de las variables ya creadas

    return this.http.get<Country[]>( url ); // se tiene que especificar el tipado Country[], de otra forma el get puede devolver cualquier cosa (any)
  }               
}
