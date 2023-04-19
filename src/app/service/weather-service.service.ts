import { Injectable } from '@angular/core';
import { WeatherInput } from '../interfaces/weather-input';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { tomorrowIOKey } from '../../api-key'
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment.ts';

const httpOptions = {
  headers: new HttpHeaders({
    'apikey': `${tomorrowIOKey}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private router: Router, private http: HttpClient) { }
  
  setLocalStorage(input: WeatherInput) {
    localStorage.setItem("zipCode", input.zipCode.toString())
    localStorage.setItem("unit", input.unit)
    this.router.navigate(['current-weather'])
  }

  get getLocalStorage() {
    return { zipCode: localStorage.getItem("zipCode") , unit: localStorage.getItem("unit") }
  }

  getCurrentWeather(): Observable<any> {
    const stringZip: string | null = localStorage.getItem("zipCode")
    const unit: string | null = localStorage.getItem("unit")
    const url: string = `https://api.tomorrow.io/v4/weather/realtime?location=${stringZip}&units=${unit}`
    return this.http.get<any>(url , httpOptions);
  }
}
