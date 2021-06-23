import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientesComponent } from './commons/components/list-clientes/list-clientes.component';
import { NewClientesComponent } from './commons/components/new-clientes/new-clientes.component';

const routes: Routes = [
  {path: '', component: ListClientesComponent},
  {path: 'lista', component: ListClientesComponent},
  {path: 'nuevo', component: NewClientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesFlowRoutingModule { }
