import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessFlowRoutingModule } from './business-flow-routing.module';
import { BusinessFlowComponent } from './business-flow.component';
import { ClientesFlowModule } from './clientes-flow/clientes-flow.module';
import { HeaderModule } from '../commons/components/header/header.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BusinessFlowComponent],
  imports: [
    CommonModule,
    BusinessFlowRoutingModule,
    ClientesFlowModule,
    HeaderModule,
  ],
  exports: [BusinessFlowComponent],
})
export class BusinessFlowModule { }
