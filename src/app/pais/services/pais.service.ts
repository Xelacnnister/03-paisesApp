import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<any>{ //en el .get nos dice que tipo de info va a retornar - Ponemos momentaneamente que el Observable es de tipo <any> ya que aun no sabemos de que tipo es

    const url = `${ this.apiUrl }/name/${ termino }`; //Construimos la url con ayuda de las variables ya creadas

    return this.http.get( url );
  }

}
