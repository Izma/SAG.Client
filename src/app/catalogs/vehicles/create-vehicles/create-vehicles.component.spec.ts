import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehiclesComponent } from './create-vehicles.component';

describe('CreateVehiclesComponent', () => {
  let component: CreateVehiclesComponent;
  let fixture: ComponentFixture<CreateVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
