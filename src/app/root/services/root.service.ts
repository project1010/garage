import { CarModel } from './../../cars/model/cars.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class RootService {

	private dataSource = new BehaviorSubject<CarModel[]>([
		{
			ItemId: "3a3a2d99-2f74-455e-8ec6-62b39947b480",
			Name: "BMW",
			LicenseNo: "9B76GFV"
		},
		{
			ItemId: "e671cf50-2255-45a3-91a4-74eede8090fc",
			Name: "Lamborghini",
			LicenseNo: "5ACZA43"
		},
		{
			ItemId: "e671cf50-2255-45a3-91a4-74eede80956c",
			Name: "Toyota",
			LicenseNo: "U8IY78R"
		}
	]);
	currentData = this.dataSource.asObservable();
	constructor() { }

	deleteCar(data: CarModel[], itemId: string) {
		console.log(data, itemId);
		var removeIndex = data.map(function (item) { return item.ItemId; }).indexOf(itemId);
		data.splice(removeIndex, 1);
	}

	updateGarage(data: CarModel[]) {
		this.dataSource.next(data);
	}
}
