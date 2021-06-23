import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientesComponent } from './list-clientes.component';
import { ClientesService } from '../../services/clientes.service';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogDocModule } from 'src/app/commons/components/dialog-doc/dialog-doc.module';



@NgModule({
  declarations: [ ListClientesComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    DialogDocModule,
    HttpClientModule,
  ],
  exports: [ ListClientesComponent ],
  providers: [ ClientesService ]

})
export class ListClientesModule { }
