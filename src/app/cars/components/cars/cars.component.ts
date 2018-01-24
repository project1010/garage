import { CarsModule } from './../../cars.module';
import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { RootService } from './../../../root/services/root.service';

import { DialogComponent } from '../dialog/dialog.component';

import { CarModel } from '../../model/cars.model';

@Component({
  	selector: 'app-cars',
 	templateUrl: './cars.component.html',
  	styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  	dialogResult:CarModel;
	carData: CarModel[] = [];
	message:string;

	constructor(public dialog: MatDialog, private data: RootService) { }
	  
  	ngOnInit() {
		
  	}

	openDialog() {
		let ItemId:string = this.guid();
		let Name:string;
		let LicenseNo:string;

		let dialogRef = this.dialog.open(DialogComponent, {
			width: '600px',
			data: new CarModel(ItemId,Name,LicenseNo)
		});

		dialogRef.afterClosed().subscribe(result => {
			this.dialogResult = result;
			this.carData.push(this.dialogResult);
			this.data.updateGarage(this.carData);
			console.log(this.carData);
		})
	}

    guid(): string {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }
}
