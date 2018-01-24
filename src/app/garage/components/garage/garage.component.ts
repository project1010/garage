import { RootService } from './../../../root/services/root.service';
import { CarModel } from './../../../cars/model/cars.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  allCars:CarModel[];
  constructor(private data: RootService) { }

  deleteCar(allCars:CarModel[] , itemId:string){
    this.data.deleteCar(allCars, itemId);
  }
  ngOnInit() {
    this.data.currentData.subscribe(response => this.allCars = response);
  }
}
