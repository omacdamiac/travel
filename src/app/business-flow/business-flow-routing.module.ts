import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessFlowComponent } from './business-flow.component';

const routes: Routes = [
  {
    path: "",
    component: BusinessFlowComponent,
    children: [
      {path: '', redirectTo: 'clientes', pathMatch: 'full'},
      {
        path: "",
        children: [
          {
            path: "clientes",
            loadChildren: () =>
              import("./clientes-flow/clientes-flow.module").then(
                (m) => m.ClientesFlowModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessFlowRoutingModule { }
