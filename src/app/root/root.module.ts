import { GarageModule } from './../garage/garage.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RootComponent } from './components/root.component';


import { RootService } from './services/root.service';



@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    GarageModule
  ],
  providers: [RootService],
  bootstrap: [RootComponent]
})
export class RootModule { }
