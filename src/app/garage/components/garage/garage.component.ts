import { RootService } from './../../../root/services/root.service';
import { CarModel } from './../../../cars/model/cars.model';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-garage',
	templateUrl: './garage.component.html',
	styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
	cars: CarModel;
	allCars: CarModel[];
	name: string;
	licenseNo: string;

	constructor(private data: RootService) { }

	deleteCar(allCars: CarModel[], itemId: string) {
		this.name = null;
		this.licenseNo = null;
		this.data.deleteCar(allCars, itemId);
	}

	details(detailsData: CarModel) {
		this.name = detailsData.Name;
		this.licenseNo = detailsData.LicenseNo;
	}

	ngOnInit() {
		this.data.currentData.subscribe(response => this.allCars = response);
	}
}
