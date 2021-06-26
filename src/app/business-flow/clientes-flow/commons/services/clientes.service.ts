import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_CLIENTES } from 'src/app/commons/utils/enums';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes() {
    const url_api = `${environment.API_BASE}${ENDPOINT_CLIENTES.LIST}`
    return this.http.get(`${url_api}`);
  }

  newCliente(cliente: any) {
    const url_api = `${environment.API_BASE}${ENDPOINT_CLIENTES.LIST}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${url_api}`, cliente);
  }

  delete(e: any) {
    const url_api = `${environment.API_BASE}${ENDPOINT_CLIENTES.LIST}/${e}`;
    return this.http.delete(url_api);
  }

}
