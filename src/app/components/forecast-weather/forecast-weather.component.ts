import { Component, OnInit } from '@angular/core';
import { mockForecast } from '../../mock-forecast'
import { WeatherData } from 'src/app/interfaces/weather-data';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent {

  // constructor(public mockForecastdata: mockForecast){}

  // mockForecastdata = mockForecast
  mockForecastdata = mockForecast.data.timelines[0].intervals

  // forecastData = mockForecast.data.timelines.intervals
  // currentWeatherData: WeatherData = {}

  ngOnInit() {
    // console.log(this.mockForecastdata)
    // console.log(mockForecast.data)
    // this.currentWeatherData = mockForecast.data.timelines.intervals
  }
}
