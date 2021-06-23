import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesFlowRoutingModule } from './clientes-flow-routing.module';
import { ListClientesModule } from './commons/components/list-clientes/list-clientes.module';
import { NewClientesModule } from './commons/components/new-clientes/new-clientes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientesFlowRoutingModule,
    ListClientesModule,
    NewClientesModule,
  ]
})
export class ClientesFlowModule { }
