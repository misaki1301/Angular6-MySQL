import { Component, OnInit } from '@angular/core';
import {ProductosService} from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lista = null;
  prod = {
    codigo: null,
    descripcion: null,
    precio: null
  };
  constructor(private productosServicio: ProductosService) { }
    ngOnInit() {
      this.recuperarTodos();
    }
    recuperarTodos() {
      this.productosServicio.listar().subscribe(result => this.lista = result);
    }
    nuevo() {
      this.productosServicio.nuevo(this.prod).subscribe(datos => {
        if (datos['resultado'] === 'OK') {
         alert(datos['mensaje']);
         this.recuperarTodos();
        }
      });
    }
    eliminar(codigo) {
      this.productosServicio.eliminar(codigo).subscribe(datos => {
        if (datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }
    actualizar() {
      this.productosServicio.actualizar(this.prod).subscribe(datos => {
        if (datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }
    mostrar(codigo) {
      this.productosServicio.mostrar(codigo).subscribe(result => this.prod = result[0]);
    }
    hayRegistros() {
      return true;
    }

}
