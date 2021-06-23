import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'business-flow', pathMatch: 'full'},
  {
    path: 'business-flow',
    loadChildren: () =>
    import('./business-flow/business-flow.module').then(
      (m) => m.BusinessFlowModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
