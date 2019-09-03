import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
const MaterialComponent =[ 
  MatButtonModule,
  MatButtonToggleModule
];
@NgModule({
  imports: [
    MaterialComponent
  ],
  exports:[MaterialComponent]
})
export class MaterialModule { }
