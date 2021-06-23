import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
