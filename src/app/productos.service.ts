import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = 'http://localhost/lab/';
  constructor(private http: HttpClient) { }
  listar() {
      return this.http.get(`${this.url}listar.php`);
  }
  nuevo(producto) {
      return this.http.post(`${this.url}ingresar.php`, JSON.stringify(producto));
  }
  eliminar(codigo: number) {
      return this.http.get(`${this.url}eliminar.php?codigo=${codigo}`);
  }
  mostrar(codigo: number) {
      return this.http.get(`${this.url}mostrar.php?codigo=${codigo}`);
  }
  actualizar(producto) {
      return this.http.post(`${this.url}actualizar.php`, JSON.stringify(producto));
  }
}
