import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesModule } from './vehicles/vehicles.module';

@NgModule({
  imports: [
    CommonModule,
    VehiclesModule
  ],
  exports: [VehiclesModule],
  declarations: []
})
export class CatalogsModule { }
