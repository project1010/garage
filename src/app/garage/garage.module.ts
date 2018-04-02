import { GarageComponent } from './components/garage/garage.component';
import { CarsModule } from './../cars/cars.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';




@NgModule({
  imports: [
    CommonModule,
    CarsModule,
    MaterialModule
  ],
  declarations: [
    GarageComponent
  ],
  exports:[
    GarageComponent
  ]
})
export class GarageModule { }
