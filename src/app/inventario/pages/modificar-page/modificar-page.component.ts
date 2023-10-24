import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'modificar-page',
  templateUrl: './modificar-page.component.html'
})

export class ModificarComponent implements OnInit   {
  producto: any;
  id: any;

  myForm!: FormGroup;
  mostrarMensaje: string = '';

  constructor(
    private http: HttpClient,
    private service: ApiService,
    private activated: ActivatedRoute,
     private router: Router) {this.activated.paramMap.subscribe((params: any) => {
      this.id = +params.get('id');
      console.log(this.id);
  }); }

  ngOnInit(): void {
    this.buildForm()
    this.obtenerProductoPorId()
  }


   buildForm() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl('')
    });
   }

  submitForm() {

    const productId= this.id;


    this.service.actualizarDato(productId, this.myForm.value).subscribe(response => {
        this.mostrarMensaje = JSON.stringify(response);
        setTimeout(() => {
          this.mostrarMensaje = '';
        }, 3000);
    }, err => {
        this.mostrarMensaje = "DEBES LLENAR TODOS LOS CAMPOS";
        setTimeout(() => {
          this.mostrarMensaje = '';
        }, 3000);
    })
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
