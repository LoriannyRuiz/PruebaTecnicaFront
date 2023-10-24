import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'productos-page',
  templateUrl: './productos-page.component.html'
})

export class ProductosComponent implements OnInit {

  productos: any[] = [];
  productosFiltrados: any[] =[];
  nombre: any;
  categoria:any;
  mostrarMensaje: string = '';


  constructor( private http: HttpClient, private router: Router ) { }



  ngOnInit() {
    this.obtenerProductos();

  }

  obtenerProductos() {
    this.http.get<any[]>('https://localhost:7051/ProductAll')
      .subscribe(data => {
        this.productos = data;
        this.productosFiltrados = [...this.productos];
        console.log(this.productos)
      });

      this.nombre = '';
      this.categoria = '';
  }

  filtrarProductos() {
    const nombre = this.nombre;
    if (nombre) {
      this.http.get<any[]>(`https://localhost:7051/ProductName?name=${nombre}`)
        .subscribe(data => {

          this.productosFiltrados = [data];
          console.log(this.productosFiltrados)


        }, error => {
          this.mostrarMensaje = 'No existe el Producto en tu inventario.';
          this.nombre = '';
          setTimeout(() => {
            this.mostrarMensaje = '';
          }, 3000);
        });
    } else {
      this.productosFiltrados = [...this.productos];

      this.mostrarMensaje = 'Ingrese un nombre';
      this.nombre = '';
      setTimeout(() => {
        this.mostrarMensaje = '';
      }, 3000);


    }
  }

  filtrarCategory(){

  if(this.categoria){

      const filtradosCategoria = this.productos.filter(producto => producto.category === this.categoria);
      this.productosFiltrados= filtradosCategoria;

      if(this.productosFiltrados.length === 0){
        this.mostrarMensaje = 'No existe el Producto en tu inventario.';
        this.categoria = '';
        setTimeout(() => {
          this.mostrarMensaje = '';
        }, 3000);
      }
      console.log(this.productosFiltrados);

  } else {
    this.productosFiltrados = [...this.productos];

      this.mostrarMensaje = 'Ingrese una categoria!!';
      setTimeout(() => {
        this.mostrarMensaje = '';
      }, 3000);

  }

  }

  goToInvoiceDetail(product: any) {
    this.router.navigateByUrl(`/factura/${ product.id }`)

  }

  goToInvoiceDetailn(product: any) {
    this.router.navigateByUrl(`/detalles/${ product.id }`)
  }


}


