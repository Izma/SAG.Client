import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../shared/vehicles.service';
import { VehiclesModule } from 'app/catalogs/vehicles/vehicles.module';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styles: []
})
export class CreateVehiclesComponent implements OnInit {
  info: any;
  constructor(private service: VehiclesService) { }

  ngOnInit() {
  }

  demo() {
    this.service.get().subscribe(result => {
      this.info = result;
    });
  }
}
