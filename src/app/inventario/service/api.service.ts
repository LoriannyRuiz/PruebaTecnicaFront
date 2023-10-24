import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://localhost:7051'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get(`${ this.apiUrl }/ProductAll`);
  }
  getNombre(nombre: string) {
    return this.http.get(`${ this.apiUrl }/ProductName?name=${nombre}`);
  }

  agregarDato(dato: any) {
    return this.http.post(`${ this.apiUrl }/Product`, dato);
  }

  actualizarDato(id: number, dato: any) {
    return this.http.put(`${this.apiUrl}/Product?id=${id}`, dato);
  }

  eliminarDato(id: number) {
    return this.http.delete(`${this.apiUrl}/ProductId?id=${id}`);
  }
}
