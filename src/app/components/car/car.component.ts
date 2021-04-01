import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car/car';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(private CarService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.CarService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
