import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modelResponse } from 'src/models/modelResponse';
import { cliente, EstadoCivil } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class EfectyService {

  //esta url debe ir en el environment.ts. para que no quede quemado.
  private _baseUrl :string ='http://localhost:5164/api/';
  constructor(private http : HttpClient) { }



  ConsultarEstadosCiviles( ){
     return this.http.get<modelResponse>( `${this._baseUrl}/estadosCivil/Consultar`).toPromise();
  }


  ConsultarClientes( item:cliente ){
    return this.http.post<modelResponse>( `${this._baseUrl}/clientes/Consultar`,item).toPromise();
 }

 AgregarClientes(item:cliente){
   return this.http.post<modelResponse>( `${this._baseUrl}/clientes/insertar`,item).toPromise();
}
}
