import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CardetailService {
  apiUrl = 'https://localhost:44323/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<Cardetail>> {
    let newPath = this.apiUrl + 'cars/GetCarDetailDto';
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
}
