import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from 'app/security/user/create-user/create-user.component';
import { VehiclesService } from './shared/vehicles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CreateVehiclesComponent],
  declarations: [CreateVehiclesComponent],
  providers: [VehiclesService]
})
export class VehiclesModule { }
