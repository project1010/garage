import { CarsModule } from './../cars/cars.module';
import { GarageModule } from './../garage/garage.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';


import { RootComponent } from './components/root.component';
import { GarageComponent } from './../garage/components/garage.component';
import { CarsComponent } from './../cars/components/cars.component';


@NgModule({
  declarations: [
    RootComponent,
    GarageComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,    
    GarageModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
