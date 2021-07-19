import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){// Usamos el getter para evitar repeticiones de código en cada método
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');//importamos el HttpParams //Indicamos los campos que queremos que nos devuelva el API, podemos saber cuales podemos usar y cómo en la documentación de la API, en el filter response
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{ //en el .get nos dice que tipo de info va a retornar - Ponemos  que el Observable es de tipo <Country[]> para que sepa que devuelve un array[] de Country

    const url = `${ this.apiUrl }/name/${ termino }`; //Construimos la url con ayuda de las variables ya creadas

    return this.http.get<Country[]>( url, {params: this.httpParams} ); // se tiene que especificar el tipado Country[], de otra forma el get puede devolver cualquier cosa (any)
  }                                         // podria quitarse el Observable y su tipado en buscarPais() y TS lo entendería, pero es preferible dejarlo así por legibilidad

  buscarCapital( termino: string ): Observable<Country[]>{ //en el .get nos dice que tipo de info va a retornar - Ponemos  que el Observable es de tipo <Country[]> para que sepa que devuelve un array[] de Country

    const url = `${ this.apiUrl }/capital/${ termino }`; //Construimos la url con ayuda de las variables ya creadas

    return this.http.get<Country[]>( url, {params: this.httpParams} ); // se tiene que especificar el tipado Country[], de otra forma el get puede devolver cualquier cosa (any)
  }   
  
  getPaisPorAlpha( id: string ): Observable<Country>{ //en el .get nos dice que tipo de info va a retornar - Ponemos  que el Observable es de tipo <Country> para que sepa que devuelve un array[] de Country

    const url = `${ this.apiUrl }/alpha/${ id }`; //Construimos la url con ayuda de las variables ya creadas

    return this.http.get<Country>( url ); // se tiene que especificar el tipado Country, de otra forma el get puede devolver cualquier cosa (any)
  }   

  buscarRegion( region: string ): Observable<Country[]>{

    // const httpParams = new HttpParams()//importamos el HttpParams y le damos nombre a la constante httpParams (puede ser cualquiera que tenga sentido)
    //     .set('fields', 'name;capital;alpha2Code;flag;population')//Indicamos los campos que queremos que nos devuelva el API, podemos saber cuales podemos usar y cómo en la documentación de la API, en el filter response
    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, {params: this.httpParams} ); //Usamos la nueva const httpParams para pasar los fields deseados a la url. /si el nombre de la constante es el mismo, se puede simplificar a { params}
  }

}
