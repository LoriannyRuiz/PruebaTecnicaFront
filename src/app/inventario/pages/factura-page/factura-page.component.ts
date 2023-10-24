import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'factura-page',
  templateUrl: './factura-page.component.html'
})

export class FacturaComponent implements OnInit {
  producto: any;
  id: any;

    constructor(private activated: ActivatedRoute, private http: HttpClient) {
      this.activated.paramMap.subscribe((params: any) => {
        this.id = +params.get('id');
        console.log(this.id);
    });
    }
  ngOnInit() {
    this.obtenerProductoPorId();
  }
  obtenerProductoPorId() {
    const productId = this.id;

    this.http.get<any>(`https://localhost:7051/ProductId?id=${productId}`)
      .subscribe(response => {
        this.producto = response;
        console.log(response);
      });
  }

}
