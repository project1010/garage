import { CarModel } from './../../cars/model/cars.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class RootService {

  private dataSource = new BehaviorSubject<CarModel[]>([]);
  currentData = this.dataSource.asObservable();
  constructor() { }

  deleteCar(data:CarModel[] ,itemId : string){
    console.log(data,itemId);
    var removeIndex = data.map(function(item) { return item.ItemId; }).indexOf(itemId);
    data.splice(removeIndex,1);
  }

  updateGarage(data: CarModel[]) {
    this.dataSource.next(data)
  }

}
