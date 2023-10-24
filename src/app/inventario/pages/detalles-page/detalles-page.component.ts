import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'detalles-page',
  templateUrl: './detalles-page.component.html'
})

export class DetallesComponent implements OnInit{
  productos: any[] = [];
  producto: any;
  id: any;
  mostrarMensaje: string = '';

    constructor(private activated: ActivatedRoute, private http: HttpClient, private router: Router, private service: ApiService,) {
      this.activated.paramMap.subscribe((params: any) => {
        this.id = +params.get('id');
        console.log(this.id);
    });
    }
  ngOnInit() {
    this.obtenerProductoPorId();

    this.http.get<any[]>('https://localhost:7051/ProductAll')
    .subscribe(data => {
      this.productos = data;

    });
  }
  obtenerProductoPorId() {
    const productId = this.id;

    this.http.get<any>(`https://localhost:7051/ProductId?id=${productId}`)
      .subscribe(response => {
        this.producto = response;
        console.log(response);
      });
  }

  goToInvoiceDetail(product: any) {
    this.router.navigateByUrl(`/modificar/${ product.id }`)

  }


  eliminar() {

    const productId= this.id;

    this.service.eliminarDato(productId).subscribe(response => {
        this.mostrarMensaje = JSON.stringify(response);
        setTimeout(() => {
          this.mostrarMensaje = '';
        }, 3000);

        this.router.navigate(['/productos']);
    }, err => {
        console.log(err);

    })
  }




}



