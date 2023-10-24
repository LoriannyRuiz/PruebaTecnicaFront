import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './inventario/pages/productos-page/productos-page.component';
import { ModificarComponent } from './inventario/pages/modificar-page/modificar-page.component';
import { FacturaComponent } from './inventario/pages/factura-page/factura-page.component';
import { DetallesComponent } from './inventario/pages/detalles-page/detalles-page.component';
import { AddProductComponent } from './inventario/pages/addProducto-page/addProduct-page.component';
import { HomeComponent } from './inventario/pages/home-page/home-page.component';
import { SidebarComponent } from './inventario/components/sidebar/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ModificarComponent,
    FacturaComponent,
    DetallesComponent,
    AddProductComponent,
    HomeComponent,
    SidebarComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
