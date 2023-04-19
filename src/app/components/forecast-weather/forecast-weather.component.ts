import { Component, OnInit } from '@angular/core';
import {mockForecast} from '../../mock-forecast'

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent {

  ngOnInit() {
    console.log(mockForecast)
  }
}
