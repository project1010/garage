import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CarsComponent } from './components/cars/cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    CarsComponent,
    DialogComponent
  ],
  declarations: [
    DialogComponent,
    CarsComponent
  ],
  entryComponents:[
    DialogComponent
  ]
})
export class CarsModule { }
