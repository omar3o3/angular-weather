import { Injectable } from '@angular/core';
import { WeatherInput } from '../interfaces/weather-input';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { tomorrowIOKey } from '../../api-key'
import { Observable , of } from 'rxjs';
import { map , switchMap } from 'rxjs/operators';
// import { environment } from 'src/environments/environment.ts';

const httpOptions = {
  headers: new HttpHeaders({
    'apikey': `${tomorrowIOKey}`
  })
}

const postHeaders = new HttpHeaders({
  'accept': 'application/json',
  'Accept-Encoding': 'gzip',
  'content-type': 'application/json'
});
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

  getLongLatFromZip(): Observable<any> {
    const stringZip: string | null = localStorage.getItem("zipCode")
    const zipToLatLonUrl: string = `https://api.zippopotam.us/us/${stringZip}`
    const result = this.http.get(zipToLatLonUrl)
    return result.pipe(
        map((data: any) => {
          const latitude = parseFloat(data.places[0].latitude);
          const longitude = parseFloat(data.places[0].longitude);
          return [latitude, longitude];
          // return latitude + ' ' + longitude;
      })
    )
  }

  getForecastData(): Observable<any> {
    const url = "https://api.tomorrow.io/v4/timelines";
    const apiKey = "yFqLFfxqNDgPjzaUFjDLD3RlAAjrItCO";
    const fields = [
      "humidity",
      "precipitationProbability",
      "temperature",
      "temperatureApparent",
      "windGust",
      "cloudCover"
    ];
    const timesteps = ['1h'];
    const stringUnit: string | null = localStorage.getItem("unit")
  
    return this.getLongLatFromZip().pipe(
      switchMap((location: any) => {
        const current_time = new Date();
        const past_time = new Date(current_time.getTime() - (6 * 60 * 60 * 1000));
        const end_time = new Date(current_time.getTime() + (6 * 60 * 60 * 1000));
        const data = {
          'location': location,
          'fields': fields,
          'timesteps': timesteps,
          'startTime': past_time.toISOString(),
          'endTime': end_time.toISOString(),
          'units': stringUnit
        };
        const headers = {
          'Accept-Encoding': 'gzip',
          'accept': 'application/json',
          'content-type': 'application/json',
          'apikey': apiKey
        };
        return this.http.post(url, JSON.stringify(data), { headers }).pipe(
          map((response: any) => response.data)
        );
      })
    );
  }
  
  
}
