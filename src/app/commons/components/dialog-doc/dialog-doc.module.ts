import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDocComponent } from './dialog-doc.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ DialogDocComponent ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ DialogDocComponent ],
  entryComponents: [
    DialogDocComponent
  ],
})
export class DialogDocModule { }
