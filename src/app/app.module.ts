import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentaldetailComponent } from './components/rentaldetail/rentaldetail.component';
import { NavigateComponent } from './components/navigate/navigate.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    CardetailComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    RentaldetailComponent,
    NavigateComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
