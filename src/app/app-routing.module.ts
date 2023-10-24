import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inventario/pages/home-page/home-page.component';
import { ProductosComponent } from './inventario/pages/productos-page/productos-page.component';
import { DetallesComponent } from './inventario/pages/detalles-page/detalles-page.component';
import { FacturaComponent } from './inventario/pages/factura-page/factura-page.component';
import { ModificarComponent } from './inventario/pages/modificar-page/modificar-page.component';
import { AddProductComponent } from './inventario/pages/addProducto-page/addProduct-page.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent
  },
  {
    path: 'factura/:id',
    component: FacturaComponent
  },
  {
    path: 'modificar/:id',
    component: ModificarComponent
  },
  {
    path: 'agregar',
    component: AddProductComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
