import { Injectable } from '@angular/core';
import { WeatherInput } from '../interfaces/weather-input';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private router: Router){}

  setLocalStorage(input: WeatherInput) {
    localStorage.setItem("zipCode", input.zipCode.toString())
    localStorage.setItem("unit", input.unit)
    this.router.navigate(['current-weather'])
    // console.log(localStorage.getItem("zipCode") , localStorage.getItem("unit"))
  }

  get getLocalStorage() {
    return { zipCode: localStorage.getItem("zipCode") , unit: localStorage.getItem("unit") }
  }
}
