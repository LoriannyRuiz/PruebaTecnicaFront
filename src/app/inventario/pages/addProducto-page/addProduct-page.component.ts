import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';



@Component({
  selector: 'addProduct-page',
  templateUrl: './addProduct-page.component.html'
})

export class AddProductComponent implements OnInit   {

  myForm!: FormGroup;
  mostrarMensaje: string = '';

  constructor(
    private http: HttpClient,
    private service: ApiService
    ) { }

  ngOnInit(): void {
    this.buildForm()
  }


   buildForm() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      stock: new FormControl(''),
      price: new FormControl('')
    });
   }

  submitForm() {

    this.service.agregarDato(this.myForm.value).subscribe(response => {
        this.mostrarMensaje = JSON.stringify(response);
        setTimeout(() => {
          this.mostrarMensaje = '';
        }, 3000);
        this.myForm.reset();
    }, err => {
        this.mostrarMensaje = "DEBES LLENAR TODOS LOS CAMPOS";
        setTimeout(() => {
          this.mostrarMensaje = '';
        }, 3000);
    })


  }
}


