import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './general/principal/principal.component'
import { ProductosListadoComponent } from './productos/listado/listado.component'
import { ProductosRegistroComponent } from './productos/registro/registro.component'

const routes: Routes = [
  { path:"", redirectTo:"/home", pathMatch:'full' },
  { path:"home", component: PrincipalComponent },
  { path:"productos", component: ProductosListadoComponent },
  { path:"productos/registro", component: ProductosRegistroComponent },
  { path:"productos/registro/:id", component: ProductosRegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
